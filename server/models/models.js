const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  email: {type: DataTypes.STRING, allowNull: false, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
});

const Basket = sequelize.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const BasketFeed = sequelize.define('basket_feed', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Feed = sequelize.define('feed', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
  weight: {type: DataTypes.STRING, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, allowNull: false},
});

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

const Brand = sequelize.define('brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: false}
});

const FeedInfo = sequelize.define('feed_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
});

const TypeBrand = sequelize.define('type_brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Type.belongsToMany(Brand, {through: TypeBrand })
Brand.belongsToMany(Type, {through: TypeBrand })

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Brand.hasMany(Feed);
Feed.belongsTo(Brand);

Basket.hasMany(BasketFeed);
BasketFeed.belongsTo(Basket);

Type.hasMany(Feed);
Feed.belongsTo(Type);

Feed.hasMany(Rating);
Rating.belongsTo(Feed);

Feed.hasMany(BasketFeed);
BasketFeed.belongsTo(Feed);

Feed.hasMany(FeedInfo, {as: 'info'});
FeedInfo.belongsTo(Feed)


module.exports = {
  User,
  Basket,
  BasketFeed,
  Feed,
  Type,
  Brand,
  Rating,
  FeedInfo,
  TypeBrand
}