import { AppState } from '../AppState'
import { api, pictureApi } from './AxiosService'
import { catNameGenerator, generateId } from './utils'

class CatService {
  async getFacts() {
    try {
      const res = await api.get('/facts?limit=100')
      console.log('cat facts', res.data.data)
      AppState.facts = res.data.data.map(cat => new Cat(cat))
    } catch (err) {
      console.error(err)
    }
  }

  async getFact(id) {
    try {
      // THIS FUNCTION only Simulates a Server .get Method
      const fact = AppState.facts.find(f => f.id === id)
      AppState.activeFact = fact
    } catch (error) {
      console.log(error)
    }
  }

  async getCatPicture() {
    try {
      const res = await pictureApi.get('search')
      console.log('cat picture', res.data[0].url)
      AppState.catPicture = res.data[0].url
    } catch (error) {
      console.error(error)
    }
  }
}

export const catService = new CatService()

// THE BELOW CLASS IS ONLY HERE TO SIMULATE OBJECTS FROM THE CATFACTS API AS OBJECTS FROM OUR DATABASE
// CLASSES COULD BE UTILIZED IN A SIMILAR WAY TO SANITIZE INCOMING DATA
class Cat {
  constructor(data) {
    this.text = data.fact
    this.name = catNameGenerator()
    this.stars = Math.round(Math.random() * 5)
    this.id = generateId()
  }
}
// ===================================================
