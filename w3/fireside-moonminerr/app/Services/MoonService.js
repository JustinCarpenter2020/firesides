import { ProxyState } from "../AppState.js";

class MoonService{
  constructor(){
    console.log("moon serv log");
  }

  mineCheese(){
    console.log("service mining cheese")
    let cheese = ProxyState.cheese
    cheese++
    ProxyState.cheese = cheese
    console.log(ProxyState.cheese)
  }
}

export const moonService = new MoonService();