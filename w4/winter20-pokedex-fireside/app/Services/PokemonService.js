import { ProxyState } from "../Appstate.js";
import Pokemon from "../Models/Pokemon.js";
import { _pokeApi , _bcwApi } from "./AxiosService.js"
class PokemonService {
  async changePage(keyword) {
    if(keyword == "next"){
      let res = await _pokeApi.get(ProxyState.next)
      ProxyState.wildPokemons = res.data.results
      ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous
    ProxyState.page = ProxyState.page + 1
    } else {
      let res = await _pokeApi.get(ProxyState.previous)
      ProxyState.wildPokemons = res.data.results
      ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous
    ProxyState.page = ProxyState.page - 1
    
  }
  async releasePokemon(pokemonId) {
   await _bcwApi.delete("pokemon/" + pokemonId)
   ProxyState.myPokemons = ProxyState.myPokemons.filter(pokemon => pokemon._id != pokemonId)
  }
 
  constructor() {
    
  }
  async getWildPokemon() {
    // let limit = await _pokeApi.get('pokemon')
    let res = await _pokeApi.get('pokemon?limit=151')
    console.log(res)
    ProxyState.wildPokemons = res.data.results
    // do these later
    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous
  }

  async getActivePokemon(pokeName) {
    let res = await _pokeApi.get('pokemon/' + pokeName)
    console.log(res)
    ProxyState.activePokemon = new Pokemon(res.data)
  }

  async catchPokemon() {
    let pokeToCatch = ProxyState.activePokemon
    await _bcwApi.post("pokemon", pokeToCatch)
    //ProxyState.myPokemon = [...ProxyStat.myPokemon, new Pokemon(poketoCatch)]
    this.getMyPokemon()
  }
  async getMyPokemon(){
    let res = await _bcwApi.get("pokemon")
    ProxyState.myPokemons = res.data.map(p => new Pokemon(p))
    console.log(ProxyState.myPokemons);
  }
}


const service = new PokemonService();
export default service;
