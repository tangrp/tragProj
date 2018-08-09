<template>
    <div class="content mine">
        <div class="topHead">                
            <div class="toprbtn">
                <span class="editBtn"><img src="../assets/icon/setIcon@2x.png"></span>
                <span class="msgBtb"><img src="../assets/icon/msgIcon@2x.png"></span>
            </div>
        </div>
        <div class="mineprtB">
            <img src="../assets/icon/headPo@2x.png" >
            <div class="textname">{{loginUser}}</div>
        </div>
        <Row class="odACdBox">
            <Col span="12" class="orderL">
               <img src="../assets/icon/orderIcon@2x.png" >
               <span class="text">订单</span>
            </Col>
            <Col span="12" class="cardL">
               <img src="../assets/icon/cardIcon@2x.png" >
               <span class="text">卡劵</span>
            </Col>
        </Row>

        <div class="ifsBox">
            <Row class="ifsList">
                <Col span="2" class="colList">
                    <img src="../assets/icon/myIcon@2x.png" > 
                </Col>
                <Col span="20" class="colList text">
                    我的联系人
                </Col>
                <Col span="2" class="colList arrow">
                    <img src="../assets/icon/arrow@2x.png" > 
                </Col>
           </Row>
            <Row class="ifsList">
                <Col span="2" class="colList">
                    <img src="../assets/icon/addressIcoon@2x.png" > 
                </Col>
                <Col span="20" class="colList text">
                    管理收货地址
                </Col>
                <Col span="2" class="colList arrow">
                    <img src="../assets/icon/arrow@2x.png" > 
                </Col>
           </Row>
            <Row class="ifsList">
                <Col span="2" class="colList">
                    <img src="../assets/icon/shopHelpIcon@2x.png" > 
                </Col>
                <Col span="20" class="colList text">
                    购买说明
                </Col>
                <Col span="2" class="colList arrow">
                    <img src="../assets/icon/arrow@2x.png" > 
                </Col>
           </Row>
            <Row class="ifsList">
                <Col span="2" class="colList">
                    <img src="../assets/icon/aboutUsIcon@2x.png" > 
                </Col>
                <Col span="20" class="colList text">
                    关于我们
                </Col>
                <Col span="2" class="colList arrow">
                    <img src="../assets/icon/arrow@2x.png" > 
                </Col>
           </Row>
        </div>
        <div>
            <el-button type="text" class="logout"  @click="logoutF">退出登录</el-button>            
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import Tabbar from '../components/tabbar'
export default {
   name:"mine",
   components:{Tabbar},
   data(){
       return{
           loginUser:''
       }
   },
   created(){
      let localUser = localStorage.getItem("LOGINIFOCS");
      let lgUser = JSON.parse(localUser);
      this.loginUser = lgUser[0].Name;
   },
   methods:{
       logoutF(){
            this.$confirm('你确定要退出吗？', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                localStorage.removeItem("LOGINIFOCS");
                this.$router.push("/");
                this.$message({                    
                    type: 'success',
                    message: '注销成功!'
                });       
            }).catch(() => {   
            });             
       }
   },
}
</script>
<style scoped>
.topHead{
    background-color: #f5bf02;
}
.mineprtB{
    margin-top: -1px;
    padding: 7px 10px;
    background-color: #f5bf02;
    position: relative;
    z-index: 101;
    color: #404040;
    
}
.mineprtB::after{
    content: "";
    position: absolute;
    bottom: -30px;
    left: 0;
    background: #f5bf02;;
    width:100%;
    height:40px;
    border-radius: 0 0 50% 50%;
}
.mineprtB img{
    width:50px;
    height: 50px;
    border-radius: 50%;
}
.odACdBox{
    background: #fff;
    padding: 50px 10px 15px;
    z-index: 100;
}
.odACdBox img{
    width:35px;
    vertical-align: middle;
}
.odACdBox .orderL{
    border-right:1px solid #f1f1f1;
}
.odACdBox .text{
    display: inline-block;
    margin-left:7px;
}
.ifsBox{
    margin-top: 10px;
    background: #fff;
    padding: 0 10px;
}
.ifsBox .ifsList{
   text-align: left;
    height: 50px;
    border-bottom: 1px solid #f1f1f1;

}
.ifsBox .ifsList .colList{    
    line-height: 50px;
}
.ifsBox .ifsList .text{
    padding-left: 7px;
}
.ifsBox .ifsList img{
    width:20px;
    vertical-align: middle;
}
.ifsBox  .arrow img{
    width:10px;
}
.logout{
    color: #ff4a3c;
    width:100%;
    background: #fff;
    margin-top: 7px;
    padding: 15px;
    border-bottom: 1px solid #f1f1f1;
    border-top: 1px solid #f1f1f1;
    letter-spacing: 1px;
    font-size: 14px;
}
.el-message-box{
    width:200 !important;
}
</style>

