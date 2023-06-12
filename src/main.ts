import { createApp } from 'vue'
import './style.css'
import App from './app/App.vue'
import router from './app/AppRouter'
import { registerRequestInterceptor, registerResponseInterceptor } from './app/AppInterceptor'
import store from './app/shared/vuex/store'

const app = createApp(App);
app.config.warnHandler = () => {};

window.Vue = app
window.Vue.router = router

app.use(store);
app.use(router);
app.mount('#app');

registerRequestInterceptor();
registerResponseInterceptor();