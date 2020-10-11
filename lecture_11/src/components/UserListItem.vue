<template>
    <li>
      <img :src="user.avatar_url" alt="avatar" />
      <p class="login">{{user.login}}</p>
      <p class="url">
        <span>Visit: </span>
        <a :href="user.html_url" target="_blank">{{user.html_url}}</a>
      </p>
    </li>
</template>

<script>
export default {
    props: ['user']
}
</script>

<style scoped>
li {
  list-style: none;
  background-color: #eee;
  width: 100%;
  height: 80px;
  border-top: 1px solid #aaa;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 15px;
}

p {
    text-align: center;
    min-width: 350px;
}

p + p {
  margin-left: 20px;
}

.login {
  font-size: 25px;
  font-weight: bold;
  color:  rgb(135, 187, 75);
}

.url span {
    font-weight: bold;
    font-style: italic;
}

.url a {
    color: inherit;
}
</style>