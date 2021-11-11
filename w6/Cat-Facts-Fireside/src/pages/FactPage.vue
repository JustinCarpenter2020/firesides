<template>
  <div class="container-fluid bg-dark">
    <div class="row justify-content-center p-3">
      <div class="col-8 text-center">
        <img :src="picture" class="img-fluid rounded shadow-sm">
      </div>
      <div class="col-6 text-light p-2">
        <h4 class="">
          {{ fact.name }}
        </h4>
        <p>{{ fact.text }}</p>
        <div class="col-12">
          <i v-for="(star, i) in fact.stars" :key="i" class="bi bi-star"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { catsService } from '../services/CatsService'
import { useRoute } from 'vue-router'
export default {
  name: 'FactPage',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      catsService.getFact(route.params.id)
    })
    return {
      fact: computed(() => AppState.activeFact),
      picture: computed(() => AppState.catPicture)
    }
  }
}
</script>

<style scoped>
.row{
  max-height: 60vh;
}

.img-fluid{
  max-height: 70vh;
}

</style>
