import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as firebase from "firebase/app";
import 'firebase/database'
import 'firebase/storage'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCcQEHd7V3ofYDzV-rCHfy1LWEGvDBq40o",
  authDomain: "vue-shop-products.firebaseapp.com",
  databaseURL: "https://vue-shop-products-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-shop-products",
  storageBucket: "vue-shop-products.appspot.com",
  messagingSenderId: "322426094226",
  appId: "1:322426094226:web:5859e2a6868588e88a1c4b",
  measurementId: "G-YL46WKY0TK"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
