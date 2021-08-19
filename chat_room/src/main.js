import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

createApp(App).use(store).use(router).mount('#app')

// router.beforeEach((to, from, next) => {
//     console.log('to', to, 'from', from, 'next', next);

//     if(to.meta.requiresAuth){
//         console.log('這裡需要驗證')
//     }else{
//         next();
//     }
// });