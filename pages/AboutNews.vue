<!-- Please remove this file from your project -->
<template>
  <div>
    <header>YP Street Journal</header>
    <section>
      <h1 class="title">hello</h1>
      <article>
        <img class="img" src="" alt="img" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed asperiores repellat modi, laborum rem provident culpa facilis magni, itaque dolorum in quo error voluptatum iusto quis ipsum reiciendis a quod.</p>
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
  margin: 100px;
  padding: 30px;
  text-align: center;
}
img {
  margin: 100px;
}
h1.title {
  font-size: 100px;
  text-align: center;
  margin: 100px;
}
p {
  margin: 100px;
}
footer {
  background-color: #666;
  padding: 10px;
  text-align: center;
  color: white;
}
</style>
