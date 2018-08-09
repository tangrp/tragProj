import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/tabbar'
import Home from '@/components/home'
import Classify from '@/components/classify'
import Shoppingcar from '@/components/shoppingcar'
import Mine from '@/components/mine'
import Details from '@/pages/details'
import Obj from '@/pages/obj'
import Flowers from '@/pages/flowers'
import Price from '@/pages/price'
import Color from '@/pages/color'
import Classitytype from '@/pages/classitytype'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Searchres from '@/pages/searchres'
import SearchClassify from '@/pages/searchClassify'
import SecCph from '@/pages/secCph'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default:Home,
        Tabbar
      },
      beforeEnter(to,from,next){
        store.commit("tabbarhomeIcon");
        next();
      }
    },
    {
      path: '/classify',
      name: 'classify',
      redirect:'/classify/obj',
      components: {
        default:Classify,
        Tabbar
      },
      beforeEnter(to,from,next){
        store.commit("tabbarclassifyIcon");
        next();
      },
      children:[
        {
          path:'flowers',
          name:"flowers",
          component:Flowers,
        },{
          path:'price',
          name:"price",
          component:Price,
        },{
          path:'color',
          name:"color",
          component:Color,
        },{
          path:'obj',
          name:"obj",
          components:{
            default:Obj,
            Classitytype
          },
        },
      ]
    },
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      components: {
        default:Shoppingcar,
        Tabbar
      },
      beforeEnter(to,from,next){
        store.commit("tabbarshopcIcon");
        next();
      },
    },
    {
      path: '/mine',
      name: 'mine',
      components: {
        default:Mine,
        Tabbar
      },
      beforeEnter(to,from,next){
        store.commit("tabbarIcon");
        next();
      },
    },
    {
      path: '/details',
      name: 'details',
      components: {
        default:Details
      },
      props:(route) =>({
        query:route.query.q
      })
    },{
      path: '/login',
      name: 'login',
      components: {
        default:Login}
    },{
      path: '/register',
      name: 'register',
      components: {
        default:Register}
    },
    {
      path: '/searchres',
      name: 'searchres',
      redirect:'/searchres/secCph',
      props:(route) =>({
        query:route.query.q
      }),      
      components: {
        default:Searchres
      },children:[
        {
          path:'secCph',
          name:"secCph",
          component:SecCph,
        }
      ]
    }
      
    
  ]
})
