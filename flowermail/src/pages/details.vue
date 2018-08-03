<template>
    <div class="details content">
        <div class="wrapRow01">
            <div class="linksBtn">
                <span class="lbtn goback" @click="goback">
                    <img  src="../assets/icon/descback@2x.png">
                </span>
                <span class="lbtn msg"  >
                     <img  src="../assets/icon/descMsg@2x.png">
                </span>
                <span class="lbtn share">
                     <img  src="../assets/icon/descShare@2x.png">
                </span>
            </div>
            <!-- 轮播图 -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-if="contentArrImg" v-for="(item, index) in contentArrImg" :key="index">
                        <img :src="require('../assets/list/'+item)" >
                    </div>                   
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
            <!-- 快递费等 -->
            <div class="wrapWhitebg" v-if="contentArr[0]">
                <Row class="fldesc">
                    <Col span="19" class="descText">
                        {{contentArr[0].desc}}
                    </Col>
                    <Col span="5" class="sharePrize">
                        <img src="../assets/icon/srPrizeIcon@2x.png">
                        <span class="text">分享有奖</span>
                    </Col>
                </Row>
                <div class="priceWrap" v-if="contentArr[0]">
                    <span class="price">{{contentArr[0].flPrice | addSymbols}}</span>
                    <span class="srpPrice">惊喜价</span>
                </div>
                <div class="orgPriceW">
                    <span>价格</span>
                    <span class="orgPc" v-if="contentArr[0]">{{contentArr[0].orFLPrice | addSymbols}}</span>
                </div>
                <Row class="rowadrsw">
                    <Col span="8" class="express">
                       <span>快递：</span>
                       <span class="fee" v-if="contentArr[0]">{{contentArr[0].express}}</span>
                    </Col>
                    <Col span="8" class="sales">
                       <span>月销<span v-if="contentArr[0]">{{contentArr[0].personBuy}}</span>笔</span>
                    </Col>
                     <Col span="8" class="adrs">                        
                        <span class="text" v-if="contentArr[0]">{{contentArr[0].address}}</span>
                    </Col>
                </Row>
            </div>
            <!-- 信息（花材/花语） -->
            <div class="ifosWrap">
                <!-- 花材 -->
                <Row class="flowersbox ifsBox">
                    <Col span="4" class="headline">
                        花材
                    </Col>
                    <Col span="20" class="text" v-if="contentArr[0]">
                        {{contentArr[0].flowers}}
                    </Col>
                </Row>
                <!-- 花语 -->
                <Row class="fllggbox ifsBox">
                    <Col span="4" class="headline" >
                        花语
                    </Col>
                    <Col span="20" class="text" v-if="contentArr[0]">
                       {{contentArr[0].fllgg}}
                    </Col>
                </Row>
                <!-- 说明 -->
                <Row class="explainbox ifsBox">
                    <Col span="4" class="headline">
                        说明
                    </Col>
                    <Col span="20" class="text">
                        特殊花材缺货更换为等价花材
                    </Col>
                </Row>
                <!-- 附送 -->
                <Row class="attchbox ifsBox">
                    <Col span="4" class="headline">
                        附送
                    </Col>
                    <Col span="20" class="text" v-if="contentArr[0]">
                         {{contentArr[0].attch}}
                    </Col>
                </Row>
                <!--  配送范围 -->
                <Row class="dlvareasbox ifsBox">
                    <Col span="4" class="headline">
                        配送范围
                    </Col>
                    <Col span="20" class="text">
                        全国（可配送至全国1000朵城市，市区免费配送）
                    </Col>
                </Row>
            </div>
            <!-- 评论 -->
            <div class="conmentWrap">
                <div class="headlne">宝贝评论(<span class="cm">{{comtentArrComent.length}}</span>)</div>
                <div class="labelB">
                    <span class="tag">服务态度(<span class="cm">1200</span>)</span>
                    <span class="tag">花很美(<span class="cm">1100</span></span>
                </div>
                <div class="cmtList">
                    <ul>
                        <li class="list" v-for="(item, index) in comtentArrComent" :key="index">
                            <div class="psifo">
                                <div class="psIcon">
                                    <img :src="require('../assets/icon/'+item.headpo)" >
                                    <span class="name">{{item.name}}</span>
                                </div>                                
                                <span class="time">{{item.time}}</span>
                            </div>
                            <p class="desc">
                                {{item.desc}}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>       

         <div class="btmBtn">
            <Row>
                <Col class="btnWrp" span="4">
                    <div class="colI">
                        <img src="../assets/icon/csServerIcon@2x.png">
                        <span class="text">客服</span>
                    </div>
                </Col>
                <Col class="btnWrp collect" span="4">
                    <div class="colI">
                        <img src="../assets/icon/collectIcon@2x.png">
                        <span class="text">收藏</span>
                    </div>
                </Col>
                <Col  class="addCarBtn btn" span="8">
                    <span  @click="addShop">
                        加入购物车
                    </span>                    
                </Col>
                <Col class="buyNowBtn btn"  span="8">
                    <span  @click="nBuyTo">
                        立即购买
                    </span>
                </Col>
            </Row>
         </div>

         <div class="buyWrap" v-if="isShowBuy">
             <div class="mask" @click="isShowBuy = !isShowBuy"></div>
             <div class="buyIcosB">
                 <Row class="buyifsBox">
                     <Col class="imgw " span="8">
                         <img :src="require('../assets/list/'+contentArrImg[0])" >
                     </Col>
                     <Col class="stock" span="10">
                         <span class="price">{{contentArr[0].flPrice | addSymbols}}</span>
                         <span>库存{{contentArr[0].stock}}件</span>
                         <span>请选择购买数量</span>
                    </Col>
                    <Col class="close" span="6">
                        <img  @click="isShowBuy = !isShowBuy" src="../assets/icon/closeIcon@2x.png" alt="">
                    </Col>
                 </Row>
                 <div class="buyNum">
                     <span>购买数量</span>
                     <el-input-number class="numIpt" size="mini" v-model="buyNumb" :max="Number(contentArr[0].stock)" :min="nmin"></el-input-number>
                 </div>
                <div class="btmBtn buybtmBtn" @click="cancleBuy">
                    确定
                </div>
             </div>

         </div>
    </div>
</template>
<script>
document.addEventListener("DOMContentLoaded",function(){
    /* flash */
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
        })
},false)

import 'swiper/dist/css/swiper.css'
import Swiper  from 'swiper'

export default {
   name:"Details",
        data(){
        return { 
            contentArr:[],
            contentArrImg:[],
            comtentArrComent:[],
            isShowBuy:false,
            buyNumb:1,            
            nmin:1,
            buyList:[]
        }
    },    
    created() {
        /* 数据加载 */
        this.$axios.get("../static/json/details.json")
        .then(res =>{
            let ID = this.$route.query.ID
            this.contentArr = res.data.shopDescs;
            this.contentArr = this.contentArr.filter(function(item,index){
                    return item.ID == ID;
            })
            this.contentArrImg = this.contentArr[0].imgList;
            this.comtentArrComent = this.contentArr[0].conmentp;
        }).catch(error=>{
            console.log(error)
        })  
        
    }, 
    methods:{
        goback(){
            this.$router.go(-1);
        },
        nBuyTo(){
            let localUser = localStorage.getItem("LOGINIFOCS");
            if(localUser){
               this.isShowBuy = !this.isShowBuy; 
            }else{
                this.$router.push("/login")
            }
        },
        addShop(){
            let localUser = localStorage.getItem("LOGINIFOCS");
            if(localUser){
               this.isShowBuy = !this.isShowBuy; 
            }else{
                this.$router.push("/login")
            }
        },
        cancleBuy(){
            let localUser = localStorage.getItem("LOGINIFOCS");
            let lgUser = JSON.parse(localUser);      
            let buyListGoods = localStorage.getItem("BUYLISTGOODS");
            let curObj= {
                ID:this.$route.query.ID,
                lgUser:lgUser[0].Name,
                buyNumb:this.buyNumb,
                flPrice:this.contentArr[0].flPrice,
                orFLPrice:this.contentArr[0].orFLPrice,
                desc:this.contentArr[0].desc,
                fllgg:this.contentArr[0].fllgg,
                imgName:this.contentArrImg[0],
                stock:this.contentArr[0].stock,
            }

            if(buyListGoods){
                this.buyList=JSON.parse(buyListGoods);         
                let len = this.buyList.length;
                let letCtFlag = 0;
                for (let index = 0; index < len; index++) {
                    if(this.buyList[index].lgUser === lgUser[0].Name){
                        if(this.buyList[index].ID === this.$route.query.ID){
                            this.buyList[index].buyNumb += this.buyNumb;
                            break;
                        }else{
                            letCtFlag++;
                        }
                    }else{
                        letCtFlag++;
                    }               
                }
                if (len === letCtFlag) {                        
                    this.buyList.push(curObj); 
                }                              
            }else{
                this.buyList.push(curObj);                
            }

            localStorage.setItem("BUYLISTGOODS",JSON.stringify(this.buyList));
            this.isShowBuy = !this.isShowBuy;
            this.$Message.info("加入购物车成功");
             
        }
    },
    filters:{
        addSymbols(value){
            return "￥" + value;
        },
    }
}
</script>
<style scoped>
.swiper-container{
    font-size:0;
}
.swiper-container img{
    width:100%;
}
.details{
    background-color:#f1f1f1;
    position:relative;
}
.wrapRow01{
    position:relative;
}
.wrapRow01 .linksBtn{
    position:absolute;
    width:100%;    
    z-index:100;
    top:0;
    left:0;
    padding:10px;
}
.wrapRow01 .linksBtn .lbtn{
     display:inline-block;
     z-index:100;
     overflow:hidden;     
}
.wrapRow01 .linksBtn  .goback{
    float:left;
}
.wrapRow01 .linksBtn  .share,.wrapRow01 .linksBtn  .msg{
  float:right;  
  margin-left:10px;
}
.wrapRow01 .linksBtn .lbtn img{
    width:37px;
}


.wrapWhitebg{
    padding:10px;
    background-color:#fff;
    text-align:left;
}
/* 描述 */
.descText{
    display:inline-block;
    font-size:14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height:27px;
}
.sharePrize{
    text-align:center;
}
.sharePrize img{
    width:25px;
}
.sharePrize .text{
    display:block;
    color:#999999;
}

/* 价格 */
.priceWrap .price{
    color:#ff5c4f;
    font-size:28px;
    /* font-weight:bold; */
}
.priceWrap .srpPrice{
    border:1px solid #f5bf02;
    color:#f5bf02;
    padding:3px;
    vertical-align:super;
    margin-left:5px;
}
/* 原价 */
.orgPriceW{
    color:#666666;
    font-size:14px;
}

.orgPriceW .orgPc{
    text-decoration: line-through;
    margin-left:7px;
}

/* 快递 */
.rowadrsw{
    padding:7px 0;
    color:#999999;
}
.rowadrsw .sales{
    text-align:center;
}
.rowadrsw  .adrs{
    text-align:right;
}

/* 信息（邮费/花语/配送范围等） */
.ifosWrap{
    padding: 20px 10px;
    background-color:#f8f8f8;
    text-align: left;
    font-size: 13px;
}
.ifosWrap .ifsBox{
    margin:5px 0;
    line-height: 24 px;
}
.ifosWrap .ifsBox .headline{
    color:#666;
    letter-spacing: 1px;
}
.ifosWrap .ifsBox .text{
    color:#919191;
}
/* 评论 */
.conmentWrap{
    background-color: #fff;
    padding:10px;
    text-align:left;
}
.headlne{
    color:#4b4b4b;
    font-size: 16px;
}
.labelB{
    padding:10px  0 17px;
}
.labelB .tag{
    color:#f5bf02;
    border:1px solid #f5bf02;
    padding: 2px 3px;
}

.cmtList .psIcon{
    display: inline-block;
    color:#666666;
}
.cmtList .list{
    border-top:1px solid #f1f1f1;
    padding: 15px 0;
}

.cmtList .psIcon img{
    width:30px;
    height:30px;
    border-radius:50%;
    vertical-align: bottom;
}
.cmtList .psIcon .name{
    margin-left:7px;
    line-height: 30px;
}
.cmtList  .time{
    float: right;
    line-height: 30px;
    color:#999999;
}
.cmtList p.desc{
    padding: 10px 0;
    line-height:20px;
    color:#666666;
}
/* 收藏/购买 */
.btnWrp{
    border-top:1px solid #f1f1f1;
    height:66px;
}
.collect{
    border-left:1px solid #f1f1f1;
}
.colI{
    margin-top:10px;
    }
.colI img{
    height:25px;
}
.colI .text{
    display:block;
}
.btn{
    letter-spacing:2px;
    line-height:66px;
}
.addCarBtn{
    background:#ffe58b;
    
}
.buyNowBtn{
    background-color:#f5bf02;
}
/* 购物页面 */
.buyWrap{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity: 1;
    z-index: 1001;
}
.mask{
    width:100%;
    height:100%;
    background-color:black;
    opacity: .6;
    z-index: 101;
}
.buyIcosB{
    /* height: 39%; */
    width:100%;
    position: absolute;
    bottom: 0;
    z-index: 102;
    background-color: #fff;
    opacity: 1;
}

.buyifsBox .imgw{
    background-color:#fff;
    transform: translate(15px,-30px);
    border:1px solid rgb(211, 208, 208);
    padding: 1px;
    font-size: 0;
}

.buyifsBox .imgw img{
    width:100%;
}
.buyifsBox  .stock{
    margin-left: 30px;
    margin-top: 10px;
    text-align: left;
}
.buyifsBox  .stock span{
    display:block;
    line-height: 20px;
    letter-spacing: 1px;
}
.buyifsBox  .stock span.price{
    color:#ff5c4f;
    font-size: 14px;
}
.buyifsBox  .close{
    width:30px;
    height:30px;
    border-radius: 50%;
    position: absolute;
    top:10px;
    right:10px; 
}
.buyifsBox  .close img{
    width:100%;
    height:100%;
}
.buyNum{
    border-top:1px solid #dfdcdc;
    border-bottom: 1px solid #dfdcdc;
    margin:10px 10px 95px;
    padding: 23px 0;
    text-align: left;
    overflow: hidden;
}
.buyNum .numIpt{
    float: right;
}
.buybtmBtn{
    background-color: #f5bf02;
    opacity: 1;
    line-height: 66px;
    letter-spacing: 2px;
    font-size: 14px;
}
 </style>

