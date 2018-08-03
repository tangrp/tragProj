<template>
    <div class="classifyType">
        <Row type="flex" justify="space-between" >
            <Col span="6" class="lstLink">
                <img src="../assets/icon/lover@2x.png">
                <span>恋人</span>
            </Col>
            <Col span="6" class="lstLink">
                <img src="../assets/icon/spouse@2x.png">
                <span>爱人</span>
            </Col>
            <Col span="6" class="lstLink">
                <img src="../assets/icon/friend@2x.png">
                <span>朋友</span>
            </Col>
            <Col span="6" class="lstLink">
                <img src="../assets/icon/girls@2x.png">
                <span>闺蜜</span>
            </Col>
        </Row>
        <Row type="flex" justify="space-between">
            <Col span="6" class="lstLink">
                <img src="../assets/icon/elder@2x.png">
                <span>长辈</span>
            </Col>
            <Col span="6" class="lstLink">
                <img src="../assets/icon/wedding@2x.png">
                <span>婚礼</span>
            </Col>
            <Col span="6" class="lstLink">
                <img src="../assets/icon/strBus@2x.png">
                <span>开业</span>
            </Col>
            <Col span="6" class="lstLink">
                <img src="../assets/icon/grief@2x.png">
                <span>哀思</span>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
   name:"Classitytype",
        data(){
        return {           
        }
    },    
}
</script>
<style scoped>

.classifyType{
    width:100%;
    background-color:#fff;     
}
.classifyType .lstLink{
    color:#666;
    background-color: #fff;
    padding: 15px 0;
    width:24%;
    margin-bottom: 5px;
}
.classifyType img{
    width:35px;
    height:35px;
}
.classifyType span{
    display:block;
    letter-spacing:2px;
}
 </style>

