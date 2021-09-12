// import {makeAutoObservable} from "mobx";
//
// export default class FeedStore {
//   constructor() {
//     this._types = [
//       {id: 1, name: 'Сухие корма'},
//       {id: 2, name: 'Влажные корма'},
//       {id: 3, name: 'Игрушки'},
//     ]
//     this._brands = [
//
//     ]
//     this._feeds = [
//
//     ]
//     this._selectedType = {}
//     makeAutoObservable(this)
//   }
//
//   setTypes(types) {
//     this._types = types
//   }
//   setBrands(brands) {
//     this._brands = brands
//   }
//   setFeeds(feeds) {
//     this._feeds = feeds
//   }
//
//   setSelectedType(type) {
//     this._selectedType = type
//   }
//
//   get types() {
//     return this._types
//   }
//
//   get brands() {
//     return this._brands
//   }
//
//   get feeds() {
//     return this._feeds
//   }
//
//   get selectedType() {
//     return this._selectedType
//   }
// }