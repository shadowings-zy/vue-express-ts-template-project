import { createApp } from 'vue';
import App from './page/app.vue';
import store from './store';
import router from './router';

import './style/common.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#root');
