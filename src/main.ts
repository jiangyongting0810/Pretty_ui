import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory,createRouter} from 'vue-router'
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'

const history = createWebHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Frank},
    {path: '/xxx', component: Frank2}
  ]
})

createApp(App).use(router).mount('#app')
