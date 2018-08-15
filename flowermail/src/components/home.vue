<template>
    <div class="content home">        
        <div class="topHead">
            <Row>
                <Col span="21" class="searchBox">
                    <div class="searchwap">
                        <input type="text" v-model="serwod"  placeholder="请输入花名" class="searchIpt">
                        <Icon type="ios-search" class="serchIcon"  size="20" @click="searchrs"/>
                    </div>                    
                </Col>
                <Col span="3" class="msgBox">
                    <span class=""><img src="../assets/icon/msgIcon@2x.png"></span>
                </Col>
            </Row>

        </div>
        <div class="subContent">
            <!-- 轮播图 -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../assets/list/flash1@2x.png" >
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/list/flash2@2x.png" >
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/list/flash3@2x.png" >
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
            </div>
            <!-- 分类 -->
            <Classitytype/>
            <div class="dclist"  >
                <Row type="flex" justify="space-between" class="code-row-bg">
                    <Col class="lsCol"    span="12" v-for="(item, index) in contentlist" :key="index" v-if='index<4' >
                        <div @click="dtlLinkto" :data-id="item.descPageID">
                            <div  class="imgwrp"> <img :src="require('../assets/list/'+item.imgSrc)"></div>               
                            <span class="desc">{{item.desc}}</span>
                            <div class="ifocs">
                                <span class="price">{{item.flPrice | addSymbols}}</span>
                                <span class="sale">{{item.personBuy | buy}}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
import Tabbar from '../components/tabbar' 
import Classitytype from '../pages/classitytype' 
import 'swiper/dist/css/swiper.css'
import Swiper  from 'swiper'
import $ from 'jquery'

export default {
   name:"Home",
   components:{Tabbar,Classitytype},
    data(){
        return {
            contentlist:[],
            serwod:'',
        }
    },
    filters:{
        addSymbols(value){
            return "￥" + value;
        },
        buy(value){
            return value + "人购买"
        }
    },methods:{
        dtlLinkto:function(event){
            this.$router.push({
                path:'/details',
                query:{
                    ID:event.currentTarget.dataset.id
                }
            })     
        },
        searchrs(){
            if(this.serwod){
                this.$router.push({
                    path:'/searchres',
                    query:{
                        wd:this.serwod
                    }
                })  
            }
        }
        
    },
    mounted() {
        this.$axios.get("../static/json/flower.json")
        .then(res=>{
            this.contentlist = res.data.flList;            
            this.contentlist = this.contentlist.sort(function(n1,n2){
                return n2.personBuy-n1.personBuy
            })
        }).catch(error =>{
            console.log(error);
        })
        var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            paginationClickable :true,
            clickable:true,
            type: 'bullets',  
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable :true,
            },
        })         
    },
}
</script>
<style scoped>
.subContent{
    z-index: 100;
}
.swiper-container{
    width:100%;
    font-size:0;
    position: relative;
    z-index: 101;
}
.swiper-slide img{
    width:100%;
    height: 100%;
}
.swiper-button-next,.swiper-button-prev{
    opacity: .7;
    height: 40px;
}
.dclist{
    margin:5px 0;
    text-align:left;
    cursor:pointer;
}
.dclist .imgwrp{
    overflow:hidden;
    height:120px;    
    text-align:center;
}
.dclist .imgwrp img{
    width:130px;
    height:100px;
    padding: 0 7px;
}

.dclist .lsCol{
    background-color:#fff;
    margin-top:7px;
    padding: 10px;
    width:49.2%;
}
.dclist .lsCol .desc{
    display:inline-block;
    margin:7px 0;
    color:#737373;
    letter-spacing:1px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.dclist .lsCol .ifocs .price{
    float:left;
    color:#ff4a3c;
}
.dclist .lsCol .ifocs .sale{
    float:right;
    color:#999999;
}
.topHead{
    z-index: 1000;
    box-sizing: border-box;
}
.searchBox{
    text-align: center;
    padding-left: 5px;
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    box-sizing: border-box;
}
.searchwap{
    height: 30px;
    width:100%;   
    position: relative;
}
.searchwap::before{
    content: "";
    position: absolute;
    left: -1px;
    bottom:  0;
    height: 40%;
    width:1px;
    background-color: #666;
}
.searchwap::after{
    content: "";
    position: absolute;
    right: -1px;
    bottom:  0;
    height: 40%;
    width:1px;
    background-color: #666;
}
.searchBox .serchIcon{
    position: absolute;
    top:50%;
    right: 1%;
    transform: translateY(-50%);
    width: 25px;
    background-color: #fff;
}
.searchIpt{
    height: 100%;
    width: 100%;
    position: absolute;
    padding: 0 3%;
    outline: none;
    top:0;
    left: 0;
    border-radius: 0;
    border:1px solid transparent;
    border-bottom-color: #333;   
}  

</style>

