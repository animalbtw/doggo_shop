import {makeAutoObservable} from "mobx";

export default class FeedStore {
  constructor() {
    this._types = [

    ]
    this._brands = [

    ]
    this._feeds = [

    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setFeeds(feeds) {
    this._feeds = feeds
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get feeds() {
    return this._feeds
  }
}