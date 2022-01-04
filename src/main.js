import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app =  createApp(App);
app.use(VueRouter);

app.mount('#app');
