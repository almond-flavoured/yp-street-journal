<template>
  <Tutorial />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
  async mounted() {
    const news = await this.$store.dispatch('mediaStack/GET_ALL_NEWS')
    console.log(news)
  },
})
</script>
