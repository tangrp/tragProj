<template>
    <div class="navbar btmBtn">
       <ul class="navlist">
           <li @click="loginChkId()">
               <a><span class="barIcon homeIcon"></span>主页</a>
           </li>
           <li @click="loginChkCl()">
               <a><span class="barIcon classifyIcon"></span>分类</a>
           </li>
           <li @click="loginChkSp()">
               <a><span class="barIcon shopcIcon"></span>购物车</a>
           </li>
           <li @click="loginChkMi()">
               <a><span class="barIcon mineIcon"></span>我的</a>
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
        // homeIcon:false,
        // homeIconH:true,
        // classifyIcon:true,
        // classifyIconH:false,
        // shopcIcon:true,
        // shopcIconH:false,
        // mineIcon:true,
        // mineIconH:false,
      }  
    },
    methods:{
        loginChkId(){         
            // this.homeIcon=false;
            // this.homeIconH=true;
            // this.classifyIcon=true;
            // this.classifyIconH=true;
            // this.shopcIcon=true;
            // this.shopcIconH=false;
            // this.mineIcon=true;
            // this.mineIconH=false;
            this.$router.push("/");
            /* this.homeIcon=false;
            this.homeIconH=true;
            this.classifyIcon=true;
            this.classifyIconH=false; */
        },loginChkCl(){
            /* this.homeIcon=true;
            this.homeIconH=false;
            this.classifyIcon=false;
            this.classifyIconH=true;
            this.shopcIcon=true;
            this.shopcIconH=false;
            this.mineIcon=true;
            this.mineIconH=false; */

            

            this.$router.push("/classify"); 
            /* this.homeIcon=true; 
            this.homeIconH=false; 
            this.classifyIcon=false;
            this.classifyIconH=true;
            console.log("false") */            
        },
        
        loginChkSp(){
           /*  this.homeIcon=true;
            this.homeIconH=false;
            this.classifyIcon=true;
            this.classifyIconH=false;
            this.shopcIcon=false;
            this.shopcIconH=true;
            this.mineIcon=true;
            this.mineIconH=false; */
            let localUser = localStorage.getItem("LOGINIFOCS");
            if(localUser){
                this.$router.push("/shoppingcar")
            }else{
                this.$router.push("/login")
            }            
        },
        loginChkMi(){
            /* this.homeIcon=true;
            this.homeIconH=false;
            this.classifyIcon=true;
            this.classifyIconH=false;
            this.shopcIcon=true;
            this.shopcIconH=false;
            this.mineIcon=false;
            this.mineIconH=true; */
            let localUser = localStorage.getItem("LOGINIFOCS");
            if(localUser){
                this.$router.push("/mine")
            }else{
                this.$router.push("/login")
            } 
        }
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

</style>
