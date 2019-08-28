// Setup Firebase

import Vue from 'vue'

import Firebase from 'firebase'
import {
  rtdbPlugin as VueFire
} from 'vuefire'

Vue.use(VueFire)




export const db = Firebase
  .initializeApp({
    databaseURL: 'https://vue-asana.firebaseio.com'
  })
  .database()
