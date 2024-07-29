import { createRouter, createWebHistory } from 'vue-router'
import Progress from './components/Progress.vue'
import calendar from './components/calendar.vue'
import formTraning from './components/forms/formTraning.vue'
import howwork from './components/howwork.vue'
import main from './components/main.vue'
import profile from './components/profile.vue'
import today from './components/today.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/progress', component: Progress },
    { path: '/main', component: main, alias: '/' },
    { path: '/profile', component: profile },
    { path: '/howwork', component: howwork },
    { path: '/today', component: today },
    { path: '/calendar', component: calendar },
    { path: '/formtraning', component: formTraning }
  ]
})