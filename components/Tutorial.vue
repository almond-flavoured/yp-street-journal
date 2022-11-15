<!-- Please remove this file from your project -->
<template>
  <div>
    <header>YP Street Journal</header>
    <section>
      <article v-for="(item, idx) in list" :key="`${item}${idx}`" @click="click(idx)">
        <h1>{{item.title}}</h1>
        <img src="" :alt="`${item.img}`" />
        <p>{{item.content}}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatibus minima animi alias. Autem pariatur in facilis distinctio vero voluptas temporibus laboriosam voluptatem! Nesciunt aut eligendi aliquid iure eum maxime?</p>
      </article>
    </section>
    <footer><h1>@all right</h1></footer>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      list: [{
        title: 'hello',
        img: 'img',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed asperiores repellat modi, laborum rem provident culpa facilis magni, itaque dolorum in quo error voluptatum iusto quis ipsum reiciendis a quod.'
      },
      {
        title: 'hello',
        img: 'img',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed asperiores repellat modi, laborum rem provident culpa facilis magni, itaque dolorum in quo error voluptatum iusto quis ipsum reiciendis a quod.'
      },
      {
        title: 'hello',
        img: 'img',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed asperiores repellat modi, laborum rem provident culpa facilis magni, itaque dolorum in quo error voluptatum iusto quis ipsum reiciendis a quod.'
      }]
    }
  },
  methods: {
    click(idx) {
      this.$router.push(`about/${idx}`)
    }
  }
}
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
  height: 100vh;
}
article {
  display: table;
  margin: 50px;
  padding: 30px;
  cursor: pointer;
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
