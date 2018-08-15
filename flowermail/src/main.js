import Vue from 'vue';
import App from './App';
import router from './router';
import '../static/css/common.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import Axios from 'axios'
import store from './store'
import layer from 'vue-layer-mobile'
import 'vue-layer-mobile/need/layer.css'
import {InputNumber,Button,Message,Select,Option,MessageBox} from 'element-ui'

Vue.use(layer);
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
