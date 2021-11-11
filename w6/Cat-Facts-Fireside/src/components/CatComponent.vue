<template>
  <div class="Cat card-container border-0 col-4 p-2 bg-transparent text-light py-5">
    <div class=" row justify-content-center">
      <div class="cat-image col-3 mr-0 pb-0">
        <img :src="catImage + indexProp" class="img-fluid rounded">
      </div>
      <div class="col-10 bg-primary rounded shadow-sm p-3" @click="getBigFact(fact.id)">
        <div class="row">
          <h5 class="col-12 border-bottom pt-0 pb-1">
            {{ fact.name }}
          </h5>
          <div class="col-12 p-2">
            {{ fact.text }}
          </div>
          <div class="col-12">
            <i v-for="(star, i) in fact.stars" class="bi bi-star" :key="i"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { catService } from '../services/CatService'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
export default {
  name: 'CatComponent',
  props: { factProp: { type: Object, required: true }, indexProp: { type: Number, required: true } },
  setup(props) {
    const catImage = ref('')
    const router = useRouter()
    onMounted(() => setTimeout(() => { catImage.value = 'https://thiscatdoesnotexist.com/?v= ' }, 1150 * props.indexProp - 1))
    return {
      catImage,
      fact: computed(() => props.factProp),
      async getBigFact(id) {
        await catService.getCatPicture()
        AppState.activeFact = this.fact
        router.push({ name: 'FactPage', params: { id: id } })
      }
    }
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
