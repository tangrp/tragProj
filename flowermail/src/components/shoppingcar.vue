<template>
    <div class="content shoppingcar">
        <div class="topHead">
            <span class="cText">购物车</span>                
            <div class="toprbtn">
                <el-button type="text" v-if="edAtlFlag" class="editBtn" @click="edAtlFlag = false" :disabled="edtFlag">编辑</el-button>
                <el-button type="text" v-else class="editBtn" @click="edAtlFlag = true;" >取消</el-button>
                <!-- <span v-if="edAtlFlag" class="editBtn" @click="edAtlFlag = false">编辑</span>
                <span v-else class="editBtn" @click="edAtlFlag = true;">取消</span> -->
                <span class="msgBtb"><img src="../assets/icon/msgIcon@2x.png"></span>
            </div>
        </div>
        <div class="subContent">
            <div v-if="showP" class="datalist">
                <div class="goodsListBox">
                    <Row class="lists" v-for="(item, index) in goodsListDt" :key="index">
                        <Col span="2" class="sltd">
                             <input type="checkbox"   class="sCheckbox" @click="totalF"  :value="item.ID">
                             <label for="checkbox01" class="iptcLabel"></label>
                        </Col>
                        <Col span="6" class="goodsimg"><img :src='require("../assets/list/"+item.imgName)'></Col>
                        <Col span="16" class="goodsifs">
                            <p class="desc">{{item.desc}}</p>
                            <span class="flwLg">{{item.fllgg}}</span>
                            <div class="numB clearFix">
                                <span class="money">
                                    <span class="flPrice" v-if="goodsListDt">{{item.flPrice | addsymbol}}</span>
                                    <span class="orFLPrice">{{item.orFLPrice | addsymbol}}</span>
                                </span>
                                <span class="numtl">
                                    <el-input-number class="numIpt" size="mini" v-model="item.buyNumb" :max="Number(item.stock)" :min="nmin"></el-input-number>
                                </span>
                            </div>
                        </Col>
                    </Row>                    
                </div> 
                <div class="settletAtsBox clearFix">
                    <div class="allSlt">
                        <input type="checkbox" class="aCheckbox" @click="sltA" :checked="aChkFlag">
                        <span>全选</span>
                    </div>
                    <div class="totalAmoy">
                        <span class="allMy" v-if="edAtlFlag">
                            合计：
                            <span class="totalMoney">{{allMy | addsymbol}}</span>
                        </span>
                        <!-- <span v-else >删除</span>   -->
                        <Button v-else class="delBtn" @click="delData" type="error">删除</Button>
                        <Button  :class="{'total':'edAtlFlag','totaldsb':!edAtlFlag}" type="default" @click="totalGo" :disabled="!edAtlFlag">结算({{sld}})</Button>
                        <!-- <span class="total">结算({{sld}})</span>                         -->
                    </div>
                </div>
            </div>
            <div class="spCarept" v-else></div>
        </div>
        <Tabbar/>
    </div>
</template>
<script>
import Tabbar from '../components/tabbar';
import $ from 'jquery';

export default {
   name:"ShopingCar",
   components:{Tabbar},
   data(){
       return{
           showP:false,
           dataAll:[],
           goodsListDt:[],
           nmin:1,
           allMy:0,
           indeterminate: true,
           checkAll: false,
           sld:0,
           edAtlFlag:true,
           loginUser:'',
           edtFlag:true,
           aChkFlag:false
           
       }
   },
   created(){
      let goodsList = localStorage.getItem("BUYLISTGOODS");
      let localUser = localStorage.getItem("LOGINIFOCS");
      let lgUser = JSON.parse(localUser);
      this.loginUser = lgUser[0].Name;
      this.dataAll = JSON.parse(goodsList);
      let _this = this;
      if(goodsList){
          this.goodsListDt = this.dataAll.filter(function(item,idx){
                return item.lgUser === _this.loginUser;
          })
      }
      this.showP = this.goodsListDt.length > 0?true:false;
      this.edtFlag = this.goodsListDt.length > 0 ?false:true;
   },
   filters:{
       addsymbol(val){
           return "￥"+val;
       }
   },
   methods:{      
       /* 全部选中  */
        sltA(){
            $(".sCheckbox").each(function (index, ele) {
                this.checkAll = !this.checkAll;
                $(ele).prop("checked",this.checkAll);
            })
            /* 结算 */
            if(this.edAtlFlag){
                let total = 0;
                let sd = 0;
                $(".sCheckbox").each(function (index, ele) {
                    if ($(ele).prop("checked")) {                    
                        ++sd;
                        let tem = $(".flPrice").eq(index).text().trim().slice(1);
                        let numIpt = $(".numtl input").eq(index).val(); 
                        total += parseFloat(tem * numIpt);                    
                    }
                })
                if($(".sCheckbox").length==sd){
                    this.aChkFlag = true;
                }else{
                    this.aChkFlag = false;
                }
                this.allMy=total;
                this.sld = sd; 
            }else{
                /* 编辑 */
            }
        },
        totalF() {
             /* 结算 */
            if(this.edAtlFlag){
                let total = 0;
                let sd = 0;
                $(".sCheckbox").each(function (index, ele) {
                    if ($(ele).prop("checked")) {
                        ++sd;
                        let tem = $(".flPrice").eq(index).text().trim().slice(1);
                        let numIpt = $(".numtl input").eq(index).val(); 
                        total += parseFloat(tem * numIpt);
                    }
                })

                if($(".sCheckbox").length==sd){
                    this.aChkFlag = true;
                }else{
                    this.aChkFlag = false;
                }
       
                this.allMy=total;
                this.sld = sd;
            }
        },
        totalGo(){
            // 结算
        },
        delData(){
            let _this = this;
            $(".sCheckbox").each(function (index, ele) {
                if ($(ele).prop("checked")) {                    
                    let ID=$(ele).attr("value");
                    for (const key in _this.dataAll) {
                        if(_this.dataAll[key].ID===ID){
                            _this.dataAll.splice(key,1);
                            localStorage.setItem("BUYLISTGOODS",JSON.stringify(_this.dataAll));                             
                            if(_this.dataAll.length > 0){
                                _this.goodsListDt = _this.dataAll.filter(function(item,idx){
                                    return item.lgUser === _this.loginUser;
                                })  
                            }else{
                                 _this.goodsListDt=[];
                                 _this.edAtlFlag = true;
                            }
                            _this.showP = _this.goodsListDt.length > 0?true:false;  
                            _this.edtFlag = _this.goodsListDt.length > 0 ?false:true;     
                        }
                    }                   
                }
            })
        }
    },
   mounted(){
        $(".navlist .shopcIcon").css("backgroundImage",`url(${require('../assets/icon/shopcarIconA@2x.png')})`)
   }
}
</script>
<style scoped>
.spCarept{
    width:100%;
    height:100%;  
    background:url('../assets/icon/shopnl@2x.png') no-repeat center center;
    background-size: 170px;
}
.datalist{
    width:100%;
    height:100%; 
}
.goodsListBox{
    width:100%;
    height: calc(100% - 44px);
    overflow: scroll;
}
.lists{
    margin-top: 7px;
    padding: 10px;
    background-color:#fff;
    color:#666;
}
.goodsimg img{
    width:100%;
}
.goodsifs{
    padding-left: 10px;
    text-align: left;
}
.sltd{
    margin-top: 25px;
}
.goodsifs .desc{
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
}
.goodsifs .flwLg{
    color: #999999;
    line-height: 20px;
}
.numB{   
    height: 30px;    
}
.clearFix{
    zoom: 1;
}
.clearFix::after{
    content: '';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}
.numB .money{
    float: left;
    line-height: 30px;
}
.numB .money .flPrice{
    color: #ff4a3c;
    margin-right: 4px;
}
.numB .money .orFLPrice{
    color: #999999;
    text-decoration:line-through;
}
.numB .numtl{
    float: right;
    font-size: 14px;
}
.numB .numtl .numIpt{
    width:100px;
    font-size: 12px
}

.settletAtsBox{
    width:100%;
    height:44px;
    background-color:#fff;    
     line-height: 44px;
     overflow: hidden;
}
.allSlt{
    float: left;
    width:50%;
    height: 100%; 
    padding: 0px 10px;
    text-align: left;
}
.totalAmoy{
    float: right;
    width:50%;
    height: 100%;
}
.settletAtsBox .total{
    display: inline-block;
    height: 100%;
    width:50%;
    float: right;
    background-color:#f5bf02;
    outline: none;
    border:none;
    color:#fff;
    box-shadow: none;
    border-radius: 0;
}
.totaldsb{
    opacity: .5;
}
.totalMoney{
    color:#ff4a3c;
}
.delBtn{
    width:50%;
    height: 100%;
    border-radius: 0;
    background: red;
    outline: none;
    border:none;
}
.editBtn{
    color:#f5bf02;
}
.editBtn.is-disabled{
    color:#c0c4cc
}
.aCheckbox{
    line-height: 44px;
    border:1px solid red;
}
</style>

