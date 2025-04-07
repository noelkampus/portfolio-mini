import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import OptimizedImage from './components/OptimizedImage.vue'

const app = createApp(App)

app.component('OptimizedImage', OptimizedImage) // <-- this replaces ALL <img> tags globally

createApp(App).use(router).mount('#app')
