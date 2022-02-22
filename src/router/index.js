import Vue from 'vue'
import VueRouter from 'vue-router'
import Cafe from "../components/Cafe";
import CafeView from "../components/CafeView";
import Shop from "../components/Shop";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cafe',
    component: Cafe
  },
  {
    path: '/cafe/view',
    name: 'Cafe',
    component: CafeView
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
