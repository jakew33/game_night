import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Player } from "./Models/Player.js"

class AppState extends EventEmitter {
  /**@type import('./Models/Player.js').Player[] */
  players = [
      new Player(
        {
          name: 'playerName',
          score: 0
        }
      )
    ]
  }
  
  
  
  
  









// IGNORE ME vvvvvvvvvvv
export const appState = new Proxy(new AppState(), {
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