<template>
    <div>
        <RedirectButton class="redirect-button"
        v-bind:to="'./GlobalDataPage'"
        v-bind:title="'Global Data Page'"/>
        
        <RedirectButton class="redirect-button"
        v-bind:to="'./VUEXPage'"
        v-bind:title="'VUEX Page'"/>
    </div>
</template>

<script>
import RedirectButton from '@/components/RedirectButton.vue';
export default {
    components: {
        RedirectButton
    }
}
</script>

<style scoped>
div {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.redirect-button {
  display: block;
  width: 230px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin: 20px;
  border-radius: 30px;
  border: 1px solid #fff;
  background: rgb(135, 187, 75);
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 0 10px 5px #aaa;
  transition: transform 0.3s;
}

.redirect-button:hover {
  transform: scale(0.95);
}

</style>