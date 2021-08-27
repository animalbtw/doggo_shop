const {Feed, FeedInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class FeedController {
  async create(req, res, next) {
    try {
      let {name, price, weight, typeId, info} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const feed = await Feed.create({name, price, weight, typeId, img: fileName})
      if (info) {
        info = JSON.parse(info)
        info.forEach(i =>
          FeedInfo.create({
            title: i.title,
            description: i.description,
            feedId: feed.id
          })
        )
      }
      return res.json(feed)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }

  async getAll(req, res) {
    let {brandId, typeId, limit, page} = req.body
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let feed
    if (!brandId && !typeId) {
      feed = await Feed.findAndCountAll({limit, offset})
    }
    if (!brandId && typeId) {
      feed = await Feed.findAndCountAll({where: {typeId}, limit, offset})
    }
    if (brandId && !typeId) {
      feed = await Feed.findAndCountAll({where: {brandId}, limit, offset})
    }
    if (brandId && typeId) {
      feed = await Feed.findAndCountAll({where: {brandId, typeId}, limit, offset})
    }
    return res.json(feed)
  }

  async getOne(req, res) {
    const {id} = req.params
    const feed = await Feed.findOne(
      {
        where: {id},
        include: [{model: FeedInfo, as: 'info'}]
      }
    )
    return res.json(feed)
  }
}

module.exports = new FeedController()