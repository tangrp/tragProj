<template>
    <div class="content classify">
        <div class="topHead">
            <span class="cText">分类</span>                
            <div class="toprbtn">
                <span class="editBtn"><img src="../assets/icon/searchBtn@2x.png"></span>
                <span class="msgBtb"><img src="../assets/icon/msgIcon@2x.png"></span>
            </div>
        </div>
        <div class="subContent">
            <div>
                <ul class="clsy-Menu">
                    <li><router-link exact to="/classify/obj">对象</router-link></li>
                    <li><router-link exact to="/classify/flowers">花材</router-link></li>
                    <li><router-link exact to="/classify/color">颜色</router-link></li>
                    <li><router-link exact to="/classify/price">价格</router-link></li>
                </ul>
            </div>
            <div class="clssifypageBox">
                <router-view/>
                <router-view name="Classitytype"/>
            </div>
        </div>        
        <Tabbar/>
    </div>
</template>
<script>
import Tabbar from '../components/tabbar'
import $ from 'jquery'
export default {
   name:"Classify",
   components:{Tabbar},
   data(){
       return{}
   },
   mounted(){
        $(".navlist .classifyIcon").css("backgroundImage",`url(${require('../assets/icon/classityIconA@2x.png')})`)
   }
}
</script>
<style scoped>
.classifyType{
    background-color: #f1f1f1 !important;
}
.clsy-Menu{
    font-size: 0;
    margin:1px 0;
    background-color: #fff; 
    height:40px;
     
}
.clsy-Menu li{
    font-size: 0;
    display: inline-block;
    width:25%;
}
.clsy-Menu li a{
    font-size: 12px;
    display: inline-block;
    width:100%;
    height: 100%;
    line-height: 40px;
    color: #666;
}
.clsy-Menu .router-link-active{
    color:#f5bf02;
}
.clssifypageBox{
    height: calc(100% - 42px);
    overflow-y: scroll;
    padding-top: 5px;
}
/* .navlist .classifyIconH{
    background: url("../assets/icon/classityIconA@2x.png") no-repeat center center;  
    background-size: 90%;  
} */
</style>

