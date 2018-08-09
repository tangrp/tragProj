import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        homeIcon:false,
        homeIconH:true,
        classifyIcon:true,
        classifyIconH:false,
        shopcIcon:true,
        shopcIconH:false,
        mineIcon:true,
        mineIconH:false,
    },
    mutations:{
        tabbarhomeIcon(state){
            state.homeIcon=false;
            state.homeIconH=true;
            state.classifyIcon=true;
            state.classifyIconH=false;
            state.shopcIcon=true;
            state.shopcIconH=false;
            state.mineIcon=true;
            state.mineIconH=false;
        },
        tabbarclassifyIcon(state){
            state.homeIcon=true;
            state.homeIconH=false;
            state.classifyIcon=false;
            state.classifyIconH=true;
            state.shopcIcon=true;
            state.shopcIconH=false;
            state.mineIcon=true;
            state.mineIconH=false
        },
        tabbarshopcIcon(state){
            state.homeIcon=true;
            state.homeIconH=false;
            state.classifyIcon=true;
            state.classifyIconH=false;
            state.shopcIcon=false;
            state.shopcIconH=true;
            state.mineIcon=true;
            state.mineIconH=false;
        },
        tabbarIcon(state){
            state.homeIcon=true;
            state.homeIconH=false;
            state.classifyIcon=true;
            state.classifyIconH=false;
            state.shopcIcon=true;
            state.shopcIconH=false;
            state.mineIcon=false;
            state.mineIconH=true;
        },
    }
})