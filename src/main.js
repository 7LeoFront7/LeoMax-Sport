import VCalendar from 'v-calendar'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

import 'v-calendar/style.css'




const app = createApp(App)
app.use(VCalendar, {})
app.use(router)
app.mount('#app')
