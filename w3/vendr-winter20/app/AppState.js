import FoodItem from "./Models/FoodItem.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /** @type {FoodItem[]} */
  items = [new FoodItem({name: "Doritos", price: 2, quantity: 10}), new FoodItem({name: "Snickers", price: 1, quantity: 15}), new FoodItem({name: "Oatmeal Cookie", price: 3, quantity: 20})]

  money = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
