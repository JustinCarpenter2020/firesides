import { ProxyState } from "../Appstate.js";
import Pokemon from "../Models/Pokemon.js";
import PokemonService from "../Services/PokemonService.js";

//Private
let _pagenumber = 1;


function _drawWildPokemon() {
  console.log("drawing wild");
  let template = ''
  ProxyState.wildPokemons.forEach(poke => template += Pokemon.WildPokemonTemplate(poke.name))
  let wildPokemon = document.getElementById('wild-pokemon')
  wildPokemon.innerHTML = template
  document.getElementById('page-counter').innerHTML= ProxyState.page.toString()
}

function _drawActivePokemon() {
  // @ts-ignore
  let activePokemon = document.getElementById("active-pokemon")
  activePokemon.innerHTML = ProxyState.activePokemon.ActivePokemonTemplate
}

function _drawMyPokemon() {
  let template = ''
  ProxyState.myPokemons.forEach(poke => template += poke.MyPokemonTemplate)
  let myPokeDex = document.getElementById('my-pokedex')
  myPokeDex.innerHTML = template
}


//Public
export default class PokemonController {
  constructor() {
    this.getWildPokemon()
    this.getMyPokemon()
    ProxyState.on("wildPokemons", _drawWildPokemon)
    
    ProxyState.on("activePokemon", _drawActivePokemon)
    
    ProxyState.on("myPokemons", _drawMyPokemon)

    ProxyState.on("page", _drawWildPokemon)
  }

  getWildPokemon(){
    try {
      PokemonService.getWildPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  getMyPokemon(){
    PokemonService.getMyPokemon()
  }

  getActivePokemon(pokeName) {
    try {
      console.log(pokeName);
      PokemonService.getActivePokemon(pokeName)
    } catch (error) {
      console.error(error)
    }
  }

  catchPokemon() {
    try {
      
      PokemonService.catchPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  releasePokemon(pokemonId) {
    PokemonService.releasePokemon(pokemonId)
  }

  changePage(keyword){
    PokemonService.changePage(keyword)
  }



}
