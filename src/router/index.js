import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ArrangeDiary from '@/views/ArrangeDiary.vue'
import Community from '@/views/Community.vue'
import Notice from '@/views/Notice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ArrangeDiary',
    name: 'ArrangeDiary',
    component: ArrangeDiary,
  },
  {
    path: '/Community',
    name: 'Community',
    component: Community,
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: Notice,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
