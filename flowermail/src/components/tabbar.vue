<template>
    <div class="navbar btmBtn">
       <ul class="navlist">
           <li @click="loginChkId()">
               <a><span :class='{"barIcon":true, "homeIcon":$store.state.homeIcon,"homeIconH":$store.state.homeIconH}'></span>主页</a>
           </li>
           <li @click="loginChkCl()">
               <a><span :class='{"barIcon":true, "classifyIcon":$store.state.classifyIcon,"classifyIconH":$store.state.classifyIconH}'></span>分类</a>
           </li>
           <li @click="loginChkSp()">
               <a><span :class='{"barIcon":true, "shopcIcon":$store.state.shopcIcon,"shopcIconH":$store.state.shopcIconH}'></span>购物车</a>
           </li>
           <li @click="loginChkMi()">
               <a><span :class='{"barIcon":true, "mineIcon":$store.state.mineIcon,"mineIconH":$store.state.mineIconH}'></span>我的</a>
           </li>
       </ul>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name:"Navbar",
    data(){
      return{
      }  
    },
    methods:{
        loginChkId(){         
            this.$router.push("/");

        },loginChkCl(){
            this.$router.push("/classify");            
        },        
        loginChkSp(){
            let localUser = localStorage.getItem("LOGINIFOCS");
            if(localUser){
                this.$router.push("/shoppingcar")
            }else{
                this.$router.push("/login")
            }            
        },
        loginChkMi(){
            let localUser = localStorage.getItem("LOGINIFOCS");
            if(localUser){
                this.$router.push("/mine")
            }else{
                this.$router.push("/login")
            } 
        },
        
    }
}
</script>
<style>
.navbar{
    width:100%;
    height: 66px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
}
.navlist{
    font-size: 0px;
}
.navlist li{
    font-size: 14px;
    display: inline-block;
    width: 25%;
    height: 66px; 
    
    }

.navlist li a{
    display: inline-block;
    margin-top: 13px;
    width:100%;
    height: 100%;
    text-decoration: none;
    color:#333;
}

.barIcon{
    display: block;
    width:23px;
    height: 23px;
    margin: 0 auto 3px;
    color: #333;
}
.navlist .homeIcon{
    background: url("../assets/icon/homeIcon@2x.png") no-repeat center center;    
    background-size: 90%;
}
.navlist .classifyIcon{
    background: url("../assets/icon/classityIcon@2x.png") no-repeat  center center; 
    background-size: 90%;
}
.navlist .shopcIcon{
    background: url("../assets/icon/shopcarIcon@2x.png") no-repeat  center center; 
    background-size:90%; 
}
.navlist .mineIcon{
    background: url("../assets/icon/mineIcon@2x.png") no-repeat  center center;  
    background-size: 90%;  
}
.navlist .homeIconH{
    background: url("../assets/icon/homeIconA@2x.png") no-repeat center center;    
    background-size: 90%;
}
.navlist .classifyIconH{
    background: url("../assets/icon/classityIconA@2x.png") no-repeat  center center; 
    background-size: 90%;
}
.navlist .shopcIconH{
    background: url("../assets/icon/shopcarIconA@2x.png") no-repeat  center center; 
    background-size:90%; 
}
.navlist .mineIconH{
    background: url("../assets/icon/mineIconA@2x.png") no-repeat  center center;  
    background-size: 90%;  
}

</style>
