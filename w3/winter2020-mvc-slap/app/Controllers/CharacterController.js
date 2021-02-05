import { ProxyState } from "../AppState.js";
import Character from "../Models/Character.js";
import {characterService} from "../Services/CharacterService.js"

function _draw(){
  let character = ProxyState.character
  document.getElementById("character").innerHTML = /*html*/`
  <h1>${character.name}</h1>
  <h3>${character.health}</h3>
  `
}

//show that you can triggle multiple draw functions with proxystate.on
function _anotherDrawFn(){
  console.log("a change happened and trigged multiple fns")
}

function resetGame(){
  ProxyState.character = new Character('Timbo')
}

export default class CharacterController{
  constructor(){
    console.log("Hello from character controller constructor");
    console.log(ProxyState.character)
    ProxyState.on("character", _draw)
    ProxyState.on("character", _anotherDrawFn)
    _draw()
    // this.slap()
    // setTimeout(() => {
    //   this.slap()
    // }, 5000);
  }

  // slap(){
  //   console.log("slapping " + ProxyState.character.name)
  //   characterService.slap()
  // }

  // kick(){
  //   console.log("kicking " + ProxyState.character.name)
  //   characterService.kick()
  // }

  // punch(){
  //   console.log("punching " + ProxyState.character.name)
  //   characterService.punch()
  // }

  attack(str){
    characterService.attack(str)

  // if you want to reset the game you can do something like this
  //  if( characterService.attack(str)){
  //    if(window.confirm('YOU KILLED '+ ProxyState.character.name + ' Do you want to continue?')){
  //      resetGame()
  //    }
  //  }
  }
}