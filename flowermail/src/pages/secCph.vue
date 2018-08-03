    <template>
    <div class="secCph">
        <div class="dclist"  v-if="dataY">
            <Row type="flex" justify="space-between" class="code-row-bg">
                <Col class="lsCol"    span="12" v-for="(item, index) in dataList" :key="index" >
                 <div @click="dtlLinkto" :data-id="item.descPageID">
                        <div  :data-id="item.descPageID">
                            <div  class="imgwrp"> <img :src="require('../assets/list/'+item.imgSrc)"></div>               
                            <span class="desc">{{item.desc}}</span>
                            <div class="ifocs">
                                <span class="price">{{item.flPrice | addSymbols}}</span>
                                <span class="sale">{{item.personBuy | buy}}</span>
                            </div>
                        </div>
                  </div>
                </Col>                
            </Row>
        </div> 
        <div class="dclist" v-else>
            <div class="empytext"><span >这里还没有内容</span></div>
        </div>   
    </div>
</template>
<script>
export default {
   name:"SecCph" ,
   data(){
       return{
           dataList:[],
           dataY:false
       }
   },
   methods:{
        dtlLinkto:function(event){
            this.$router.push({
                path:'/details',
                query:{
                    ID:event.currentTarget.dataset.id
                }
            })     
        },
   },
   props:["cphsort"],
   created(){
      let reg = new RegExp(this.cphsort)
      this.$axios.get("../static/json/flower.json")
            .then(res=>{  
                res.data.flList.forEach(element => {
                    if(reg.test(element.flName)){
                        this.dataList.push(element);
                    }
                });             
                this.dataY =  this.dataList.length > 0 ? true:fasle;
            }).catch(error =>{
                console.log(error);
        })
    
   },filters:{
        addSymbols(value){
            return "￥" + value;
        },
        buy(value){
            return value + "人购买"
        }
    }
   
}
</script>
<style scoped>
.dclist{
    margin-bottom:5px;
    text-align:left;
    cursor:pointer;
}
.empytext{
    font-size: 24px;
    color:#999999;
    text-align: center;
    line-height: 250px;
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
</style>
