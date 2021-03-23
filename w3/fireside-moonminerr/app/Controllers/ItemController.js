import { ProxyState } from "../AppState.js";
import {itemService} from "../Services/ItemService.js"

let itemZone = document.getElementById("items")

function _draw(){
let template = ""
ProxyState.items.forEach(i=> {
  template += /*html*/`
  <button class="btn btn-primary" onclick="app.itemController.buyItem('${i.name}')"> ${i.name} - ${i.price} </button>
  `
})
itemZone.innerHTML = template
}

export default class ItemController{
  constructor(){
    console.log("item controller");
    _draw()
    ProxyState.on("item", _draw)

  }

  buyItem(itemName){
    console.log(itemName)
  }
}