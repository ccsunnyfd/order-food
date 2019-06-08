import Vue from 'vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Start from '@/components/Start.vue';
import Home from '@/components/Home.vue';
import Hot from '@/components/Hot.vue';
import Order from '@/components/Order.vue';
import Pcontent from '@/components/Pcontent.vue';
import Search from '@/components/Search.vue';
import Cart from '@/components/Cart.vue';
import EditPeopleInfo from '@/components/EditPeopleInfo.vue';
import Success from '@/components/Success.vue';


const routes = [
    { path: '/start', component: Start },
    { path: '/home', component: Home },
    { path: '/hot', component: Hot },
    { path: '/order', component: Order },
    { path: '/pcontent', component: Pcontent },
    { path: '/search', component: Search },
    { path: '/cart', component: Cart },
    { path: '/editpeopleinfo', component: EditPeopleInfo },
    { path: '/success', component: Success },  
    { path: '*', redirect: '/start' }
]

const router = new VueRouter({
    routes
})

export default router;