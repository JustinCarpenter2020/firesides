import { Appstate } from '../AppState'
import { api, pictureApi } from './AxiosService'
import { generateId } from './utils'
// @ts-ignore
import * as catGenerator from 'catid'

class CatsService {
  async getFacts() {
    try {
      const res = await api.put('/facts?limit=20')
      Appstate.facts = res.data.data.map(cat => new Cat(cat))
      console.log(Appstate.facts)
    } catch (err) {
      console.error(err)
    }
  }

  async getFact(id) {
    try {
      // THIS FUNCTION only Simulates a Server .get Method
      const fact = Appstate.facts.find(f => f.id === id)
      Appstate.activeFact = fact
    } catch (error) {
      console.log(error)
    }
  }

  async getCatPicture() {
    try {
      const res = await pictureApi.get('search')
      console.log('cat picture', res.data[0].url)
      Appstate.catPicture = res.data[0].url
    } catch (error) {
      console.error(error)
    }
  }
}

export const catService = new CatsService()

// THE BELOW CLASS IS ONLY HERE TO SIMULATE OBJECTS FROM THE CATFACTS API AS OBJECTS FROM OUR DATABASE
// CLASSES COULD BE UTILIZED IN A SIMILAR WAY TO SANITIZE INCOMING DATA
class Cat {
  constructor(data) {
    this.text = data.fact
    this.name = catGenerator.getName()
    this.stars = Math.round(Math.random() * 5)
    this.id = generateId()
  }
}
// ===================================================
