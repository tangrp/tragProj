// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import swiper from './swiper';
import '../static/css/common.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import Axios from 'axios'
import {InputNumber,Button,Message,Select,Option,MessageBox} from 'element-ui'

// import Jquery from 'jquery'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(iView);
Vue.use(InputNumber);
Vue.use(Button);
Vue.config.productionTip = false
Vue.prototype.$axios = Axios;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;


// Vue.use(Jquery);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
},)
