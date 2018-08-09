    <template>
    <div class="searchResultBox">
        <div class="topHead">
            <span class="lbtn goback" @click="goback">
                <img  src="../assets/icon/gobackIcon@2x.png">
            </span>
            <span class="cText">分类</span>                
            <div class="toprbtn">
                <span class="editBtn"><img src="../assets/icon/searchBtn@2x.png"></span>
                <span class="msgBtb"><img src="../assets/icon/msgIcon@2x.png"></span>
            </div>
        </div>
        
        <div class="subContent">
            <div>
                <ul class="sort-Menu">
                    <li><router-link class="linkMu"  to="/searchres/secCph">综合排序</router-link></li>
                    <li><router-link  class="linkMu" to="/searchres/secCph">销量优先</router-link></li>
                    <li><router-link  class="linkMu" to="/searchres/secCph">筛选<img class="sortIcon" src="../assets/icon/sortIcon@2x.png" alt=""></router-link></li>
                </ul>
            </div>
            <div class="sortlistBox" >
                <router-view :cphsort="$route.query.wd"/>
            </div>
        </div> 
    </div>
</template>
<script>
import $ from 'jquery';
export default {
   name:"Searchres" ,
   data(){
       return{           
       }
   },
   methods:{
        goback(){
            this.$router.go(-1);
        },
   },created(){

   }
}
</script>
<style scoped>
.searchResultBox{
    width:100%;
    height:100%;
    position: relative;
}
.sortlistBox{
    width:100%;
    height: calc(100% - 42px);
    background-color: #f1f1f1;
    overflow:scroll;
    
}
.goback{
    float: left;
    opacity: .7;
}
.goback img{
    width: 13px;   
}
.sort-Menu{
    font-size: 0;
    margin:1px 0;
    background-color: #fff; 
    height:40px;
     
}
.sort-Menu li .sortIcon{
    width:15px;
    vertical-align: middle;
    margin-left: 5px;
}
.sort-Menu li{
    font-size: 0;
    display: inline-block;
    width:25%;
    text-align: left;
}
.sort-Menu li:nth-child(2){
    text-align: center;
}
.sort-Menu li:nth-child(3){
    text-align: right;
}
.sort-Menu li a{
    font-size: 12px;
    display: inline-block;
    width:100%;
    height: 100%;
    line-height: 40px;
    color: #666;
}
</style>
