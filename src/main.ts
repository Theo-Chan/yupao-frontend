import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vant/es/toast/style'
import router from "./router/router.ts";

createApp(App).use(router).mount('#app')
