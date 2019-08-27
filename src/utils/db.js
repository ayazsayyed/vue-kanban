// Setup Firebase
var config = {
    apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
    authDomain: "vue-demo-537e6.firebaseapp.com",
    databaseURL: "https://vue-demo-537e6.firebaseio.com"
  }
  import Vue from 'vue'

  import firebase from 'firebase'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)


export const db = firebase
  .initializeApp(config)
  .database()