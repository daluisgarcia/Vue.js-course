import { createApp } from 'vue'

import router from './routes'
import App from './App.vue'
import store from './store/store'

createApp(App).use(router).use(store).mount('#app')
