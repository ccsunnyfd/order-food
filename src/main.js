import Vue from 'vue'
import App from './App.vue'
import storage from './model/storage.js'

import VueResource from 'vue-resource';
Vue.use(VueResource);

//get table num from url or set '000',save into storage
var roomid = window.location.hash.split('=')[1]

if (roomid) {
  storage.set('roomid', roomid);
} else {
  roomid = '000';
  storage.set("roomid", '000');
}

import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://a.itying.com?roomid='+roomid);
//vue-socket.io的使用步骤

import router from '@/router/router.js'

Vue.config.productionTip = false

new Vue({
  router,
  sockets: {
    connect: function() {
      window.console.log('socket connected');
    }
  },
  render: h => h(App),
}).$mount('#app')
