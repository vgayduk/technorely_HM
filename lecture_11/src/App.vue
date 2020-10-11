<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-page {
    display: flex;
    justify-content: center;
}

ul {
    width: 1000px;
    box-shadow: 0 0 20px 5px #aaa;
    padding: 0;
}
</style>