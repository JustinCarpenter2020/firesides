<template>
  <div class="home container-fluid">
    <ActiveFact />
    <div class="row bg-light p-3">
      <h2 class="pl-3">
        Catuurrday
      </h2>
    </div>
    <div class="row p-5 ">
      <CatComponent v-for="(fact, index ) in facts" :key="fact" :fact-prop="fact" :index-prop="index" />
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { catService } from '../services/CatService'
import CatComponent from '../components/CatComponent'
import ActiveFact from '../components/ActiveFact'
export default {
  name: 'Home',
  // NOTE this is not a bug, we use to have to manually import components
  components: { CatComponent, ActiveFact },
  setup() {
    onMounted(async() =>
      await catService.getFacts())
    return {
      facts: computed(() => AppState.facts)
    }
  }
}
</script>
