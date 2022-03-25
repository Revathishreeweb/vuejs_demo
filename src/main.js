import App from './App.vue'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import "./assets/styles/app.scss";

Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app')
