import { ProxyState } from "../AppState.js";
import {moonService} from "../Services/MoonService.js"

function _draw(){
  document.getElementById("cheese").innerHTML = ProxyState.cheese.toString()
}


//above is considered private
export default class MoonController{
  constructor(){
    console.log("moon controller");
    _draw()
    ProxyState.on("cheese", _draw)

  }

  mineCheese(){
    console.log('mining cheese')
    moonService.mineCheese()
  }
}