import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// ✅ Import Bootstrap and Bootstrap Icons properly
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// ✅ Import your own styles (if any)
import './assets/styles/styles.css'

createApp(App).use(store).use(router).mount('#app')
