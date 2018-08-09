
import Vue from 'vue';
import App from './App';
import router from './router';
import '../static/css/common.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import Axios from 'axios'
import {InputNumber,Button,Message,Select,Option,MessageBox} from 'element-ui'
import store from './store'

Vue.use(iView);
Vue.use(InputNumber);
Vue.use(Button);
Vue.config.productionTip = false
Vue.prototype.$axios = Axios;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
},)
