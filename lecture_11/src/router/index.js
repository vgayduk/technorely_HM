import Vue from 'vue'
import VueRouter from 'vue-router'
import RedirectPage from '@/views/RedirectPage.vue'
import GlobalDataPage from '@/views/GlobalDataPage.vue'
import VUEXPage from '@/views/VUEXPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: RedirectPage
  },
  {
    path: '/GlobalDataPage',
    component: GlobalDataPage
  },
  {
    path: '/VUEXPage',
    component: VUEXPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
