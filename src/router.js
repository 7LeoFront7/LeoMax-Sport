import {createRouter, createWebHistory} from 'vue-router'
import Progress from './components/Progress.vue'
import profile from './components/profile.vue'
import main from './components/main.vue'
import howwork from './components/howwork.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/progress', component: Progress },
        { path: '/main', component: main, alias: '/' },
        { path: '/profile', component: profile },
        { path: '/howwork', component: howwork }
      ]
})