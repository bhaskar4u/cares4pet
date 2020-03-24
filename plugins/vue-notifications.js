import Vue from 'vue'
import VueNotifications from 'vue-notifications'

Vue.use(VueNotifications)

Vue.prototype.$myInjectedFunction = (string) => console.log("This is an example", string)