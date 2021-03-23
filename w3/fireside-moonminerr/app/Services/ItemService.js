import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";

class ItemService{
  constructor(){
    console.log("item service");
    ProxyState.items.push(new Item("Tims Item", 2, 10))
    ProxyState.items.push(new Item("Trevors Item", 2, 30))
    ProxyState.items.push(new Item("Ryans Item", 2, 20))

  }
}

export const itemService = new ItemService()