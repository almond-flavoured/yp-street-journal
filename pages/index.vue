<template>
  <div>
    <Tutorial />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async mounted() {
    // await this.$store.dispatch('mediaStack/GET_ALL_NEWS').then(() => {
    //   console.log(this.$store.state)
    // })
    console.log(this.$accessor)
    const news = await this.$accessor.mediaStack.GET_ALL_NEWS()
  },
})
</script>
