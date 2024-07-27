import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

window.onload = function () {
    hideAddressBar();
    window.addEventListener("orientationchange", function () {
        hideAddressBar();
    }, false);
}

function hideAddressBar() {
    setTimeout(function () {
        document.body.style.height = window.outerHeight + 'px';
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1100);
    }, 1000);
    return false;
}

const app = createApp(App)
app.use(router)
app.mount('#app')
