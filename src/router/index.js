import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Order from '../views/Order.vue'
import Member from '../views/Member.vue'
import User from '../views/User.vue'
import System from '../views/System.vue'
import Detail from '../views/Detail.vue'
import Report from '../views/Report.vue'
import Result from '../views/Result.vue'
import News from '../views/News.vue'
import Rule from '../views/Rule.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
  },
  {
    path: '/member',
    name: 'member',
    component: Member,
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
  {
    path: '/system',
    name: 'system',
    component: System,
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
  },
  {
    path: '/report',
    name: 'report',
    component: Report,
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/rule',
    name: 'rule',
    component: Rule,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
