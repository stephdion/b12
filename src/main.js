// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable no-alert, no-console */
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import AlertCmp from './components/Shared/Alert.vue'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify,{
  theme:{
  primary: "#7CB342",
  secondary: "#1B5E20",
  accent: "#F57C00",
  fond:"#DCEDC8",
  blanc:"#ffffff",
  error: "#f44336",
  warning: "#FFAB00",
  info: "#2196f3",
  success: "#4caf50"
}})

Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyC5zx5A4vTBq0pZbR9aGz4SeS7j7cfQlLw',
      authDomain: 'vitanimous.firebaseapp.com',
      databaseURL: 'https://vitanimous.firebaseio.com',
      projectId: 'vitanimous',
      storageBucket: 'vitanimous.appspot.com',
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    }
  )
    this.$store.dispatch('loadPacks')
  }
})
