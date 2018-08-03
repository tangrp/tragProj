<template>
    <div class="clsContent">
        <Row type="flex" justify="space-between">
            <Col class="listBox" span="8" v-for="(item, index) in contentlist" :key="index">
                <div @click="dtlLinkto" :data-id="item.descPageID">
                    <img :src='require("../assets/list/"+item.imgSrc)' alt="">
                    <span class="text">{{item.flName}}</span>
                    <div class="ifocs">
                        <span class="price">{{item.flPrice | addsymbol}}</span>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name:"Color",
    data(){
        return{
            contentlist:[]
        }
    },created(){
        this.$axios.get("../static/json/flower.json")
        .then(res=>{
            this.contentlist = res.data.flList;
        }).catch(error =>{
            console.log(error);
        })
    },methods:{
        dtlLinkto:function(event){
            this.$router.push({
                path:'/details',
                query:{
                    ID:event.currentTarget.dataset.id
                }
            })     
        }
    } ,filters:{
        addsymbol(val){
           return "￥"+val;
        }
    }
}
</script>
<style scoped>

.listBox{
    background-color:#fff;
    padding: 5px;
    width: 32.5%;
    margin-bottom: 5px;
}
.clsContent .listBox img{
    width: 90%;
    height: 7rem;
}
.clsContent .listBox .text{
    display: inline-block;
    padding: 5px 0;

}
.listBox .ifocs{
    text-align: left;
    color:#ff4a3c;
}
</style>
