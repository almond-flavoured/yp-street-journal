<!-- Please remove this file from your project -->
<template>
  <div>
    <header>YP Street Journal</header>
    <section>
      <article v-for="(item, idx) in news" :key="`${item}${idx}`" @click="click(idx)">
        <h1>{{item.title}}</h1>
        <span>{{item.published_at}}</span> 
        <p>Catagory: {{item.category}}</p>
        <p>Country: {{item.country}}</p>
        <p>Language: {{item.language}}</p>
        <img :src="`${item.image}`" :alt="`no photo`" />
        <p>{{item.content}}</p>
        <p>{{item.description}}</p>
      </article>
    </section>
    <footer><h1>@all right</h1></footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NuxtTutorial',
  props: {
    news: {
      type: Array,
      default: () => [] 
    }
  },
  data() {
    return {
     
    }
  },
  mounted() {
    console.log(this.news)
    const news = this.$accessor.mediaStack.news
    console.log('%cMyProject%cline:38%cnews', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(248, 214, 110);padding:3px;border-radius:2px', news)
  },
  methods: {
    click(idx: Number) {
      this.$router.push(`about/${idx}`)
    }
  }
})
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif; 
}

header {
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
}
section {
  height: 100%;
}
article {
  display: table;
  margin: 50px;
  padding: 30px;
  cursor: pointer;
  border: 1px solid #666;
}
h1,
img {
  margin-bottom: 20px;
}
footer {
  background-color: #666;
  padding: 10px;
  text-align: center;
  color: white;
}
</style>
