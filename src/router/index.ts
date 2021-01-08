import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import SQLiteStore from '../views/SQLiteStore.vue';
import SQLiteStoreTables from '../views/SQLiteStoreTables.vue';
import NotFound from '../views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/sqlitestore',
    name: 'SQLiteStore',
    component: SQLiteStore
  },
  {
    path: '/sqlitestoretables',
    name: 'SQLiteStoreTables',
    component: SQLiteStoreTables
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
