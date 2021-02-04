import { AppState } from '../AppState'
import { movieApi } from './AxiosService'
import NotificationService from './NotificationService'

class MovieService {
  async searchMovies (query) {
    try {
      const res = await movieApi.get(query)
      console.log(res)
      AppState.movies = res.data.results
    } catch (error) {
      console.error(error)
    }
  }

  selectMovie (movie) {
    //  warning, error, success, info, and question
    console.log(movie)
    if (movie.vote_average < 7) {
      NotificationService.toast('This movie probably has Nic Cage', 'success')
    } else {
      NotificationService.toast('This movie probably doesnt have Nic Cage', 'error')
      AppState.activeMovie = movie
    }
  }
}
export const movieService = new MovieService()
