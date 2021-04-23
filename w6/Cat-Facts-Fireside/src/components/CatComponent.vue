<template>
  <div class="Cat card-container border-0 col-4 p-2 bg-transparent text-light py-5">
    <div class=" row justify-content-center">
      <div class="cat-image col-3 mr-0 pb-0">
        <img :src="state.catImage + indexProps" class="img-fluid rounded">
      </div>
      <div class="col-10 bg-primary rounded shadow-sm p-3" @click="getBigFact(state.fact.id)">
        <div class="row">
          <h5 class="col-12 border-bottom pt-0 pb-1">
            {{ state.fact.name }}
          </h5>
          <div class="col-12 p-2">
            {{ state.fact.text }}
          </div>
          <div class="col-12">
            <i v-for="(star, i) in state.fact.stars" class="bi bi-star" :key="i"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { catService } from '../services/CatService'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
export default {
  name: 'CatComponent',
  props: ['factProp', 'indexProp'],
  setup(props) {
    const router = useRouter()
    const state = reactive({
      fact: computed(() => props.factProp),
      catImage: ''

    })
    async function getBigFact(id) {
      await catService.getCatPicture()
      AppState.activeFact = state.fact
      router.push({ name: 'FactPage', params: { id: id } })
    }
    function getUniqueCat() {
      setTimeout(() => { state.catImage = 'https://thiscatdoesnotexist.com/?v= ' }, 1150 * props.indexProp - 1)
    }
    onMounted(() => getUniqueCat())
    return { state, getBigFact, getUniqueCat }
  }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");

.Cat{
  transition: all .3s ease;
}
.Cat:hover{
  z-index: 10;
  transform: scale(1.1,1.1);
}
.cat-image{
  z-index: 10;
transform: translate(0vw, 5px);
}
</style>
