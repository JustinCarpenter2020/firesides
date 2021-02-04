import { ProxyState } from "../Appstate.js";
import Pokemon from "../Models/Pokemon.js";
import { _pokeApi , _bcwApi } from "./AxiosService.js"
class PokemonService {
 
  constructor() {
    
  }
  async getWildPokemon() {
    // let limit = await _pokeApi.get('pokemon')
    let res = await _pokeApi.get('pokemon?limit=151')
    console.log(res)
    ProxyState.wildPokemons = res.data.results
  }

  async getActivePokemon(pokeName) {
    let res = await _pokeApi.get('pokemon/' + pokeName)
    console.log(res)
    ProxyState.activePokemon = new Pokemon(res.data)
  }

  async catchPokemon() {
    let pokeToCatch = ProxyState.activePokemon
    await _bcwApi.post("pokemon", pokeToCatch)
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
