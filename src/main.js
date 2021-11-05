import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import VueCarousel from 'vue-carousel';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(VueCarousel);
app.mount('#app');
app.config.productionTip=false;
// createApp(App).use(router).mount('#app')
