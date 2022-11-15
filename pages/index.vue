<template>
  <div>
    <Tutorial :news="news" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import {mapState} from 'vuex'
export default Vue.extend({
  data() {
    return {
      news: []
    }
  },
  async mounted() {
    // await this.$store.dispatch('mediaStack/GET_ALL_NEWS').then(() => {
    //   console.log(this.$store.state)
    // })
    console.log(this.$accessor)
    const news = await this.$accessor.mediaStack.GET_ALL_NEWS()
  },
})
</script>
