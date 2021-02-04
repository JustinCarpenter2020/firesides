import { ProxyState } from "../AppState.js"

class CharacterService{
  attack(str) {
    let character = ProxyState.character
    character.health -= character.attacks[str]

  //perform business logic in service before setting value to proxystate
    character.health = character.health < 0 ? 0 : character.health
    
    ProxyState.character = character
  }
  // kick() {
  //   let character = ProxyState.character
  //   character.health -= 10
  //   ProxyState.character = character
  // }
  // punch() {
  //   let character = ProxyState.character
  //   character.health -= 15
  //   ProxyState.character = character
  // }
  // slap() {
  //   let character = ProxyState.character
  //   character.health -= 5
  //   console.log(character)
  //   ProxyState.character = character
  // }

  constructor(){
    console.log("hello from character serv")
  }
}

export const characterService = new CharacterService()