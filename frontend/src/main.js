import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

//import App from "@/App.vue";








createApp(App).use(store).use(router).mount('#app')
