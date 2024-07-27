import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

window.scrollTo(0, 1);

const app = createApp(App)
app.use(router)
app.mount('#app')
