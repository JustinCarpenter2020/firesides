<template>
  <div class="searchComponent">
    <form @submit.prevent="searchMovies()">
      <div class="form-group">
        <input
          type="text"
          name="query"
          id="query"
          class="form-control"
          placeholder="Search a movie..."
          aria-describedby="helpId"
          v-model="state.query"
        >
        <button
          class="btn btn-success"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { movieService } from '../services/MovieService'
import NotificationService from '../services/NotificationService'
export default {
  name: 'SearchComponent',
  setup () {
    const state = reactive({
      query: ''
    })
    return {
      state,
      async searchMovies () {
        console.log(state.query)
        if (await NotificationService.confirmAction(`Are you sure you want to search for ${state.query}?`, 'This could look really bad for you.')) {
          movieService.searchMovies(state.query)
        }
      }
    }
  }
}
</script>

<style >

</style>
