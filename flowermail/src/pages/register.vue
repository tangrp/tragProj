<template>
    <div class="registercontent">
        <div class="topHead">
            <span class="lbtn goback" @click="goback">
                <img  src="../assets/icon/gobackIcon@2x.png">
            </span>
        </div>
        <div class="textB">REGISTER</div>
        <div class="registerBox">
            <div  class="rgIpt"><Icon class="icon" size="18" type="ios-person-outline" /><input v-model="user" placeholder="请输入用户名"/></div>
            <div class="rgIpt"><Icon  class="icon" size="18" type="ios-lock-outline" /><input v-model="psd" type="password"  placeholder="请输入密码"/></div>            
            <div><el-button :plain="true"  @click="register()" :disabled="rgDisbf()" :loading="rgLdg" class="registerGO" >注册</el-button></div>
      </div>
    </div>
</template>
<script>
export default {
    name:"Register",
    data(){
        return{
            user:'',
            psd:'',
            rgLdg:false,
            rgDisb:true
        }
    },methods:{
        rgDisbf(){
            this.rgDisb = this.user && this.psd ? false:true;
            return this.rgDisb;                
        },
        goback(){
            this.$router.go(-2)
        },register(){
            this.rgLdg = true;
            let regus = new RegExp('^[\\w-]{4,16}$');
            let regpsd = new RegExp('^[\\w-]{4,16}$');
            if(!regus.test(this.user)){
                this.$Message.info('请输入4-16位用户名');
                this.rgLdg = false;
                return;
            }else if(!regpsd.test(this.psd)){
                this.$Message.info('请输入4-16位密码');
                this.rgLdg = false;
                return;
            }
            Bmob.initialize("25426e2c7231c8d3310231bbabc08254", "84cf68990b8e5b67b59eab3f57dc583d");
            // Bmob 云数据库
            var user = new Bmob.User();
            user.set("username", this.user);
            user.set("password", this.psd);
            let _this = this;
            user.signUp(null, {
                success: function (user) {
                    var arr = [{
                            registerState: true,
                            Name: _this.user
                        }];
                        localStorage.setItem('LOGINIFOCS', JSON.stringify(arr));
                    _this.$router.go(-2);
                },
                error: function (user, error) {
                    _this.rgLdg = false;
                    if(error.code == 202){
                        _this.$message('用户名已经存在');
                    }
                }
            })
        } 
    }
}
</script>
<style scoped>
.registercontent{
    height: 150px;
    background-color: #fff;
}
.goback{
    float: left;
     opacity: .7;
}
.goback img{
    width: 13px;
   
}
.textB {
    padding: 50px 10px 30px;
    font-size: 32px;
    letter-spacing: 5px;
}

.ivu-input,.ivu-input:active{
    border: none !important;
    border-bottom: 1px solid #d2d2d2 !important;
    outline: none;
    box-shadow: none;
    width: 100%;
}
.registerBox .rgIpt{
    display: inline-block;
    position: relative;
    width: 70%;
}
.registerBox .rgIpt .icon{
    position: absolute;
    top:50%;
    left:5px;
    
}
.registerBox .rgIpt input{    
    width: 100%;
    margin-top:20px;
    outline: none;
    border:1px solid transparent;
    border-bottom:1px solid #f5bf02;
    padding: 7px 7px 7px 25px;
}
.registerGO{
   margin-top:30px;
   width: 70%;
   height: 2.5rem;
   background: #f5bf02;
   outline: none;
   border:none;
   border-radius: 9px;
}

.registerGO{
   margin-top:30px;
   width: 70%;
   height: 2.5rem;
   background: #f5bf02;
   outline: none;
   border:none;
   border-radius: 9px;
   letter-spacing: 7px;
   color: #fff;
}
.registerBox .is-disabled{
    margin-top:30px;
   width: 70%;
   height: 2.5rem;
   background: #fdd02c !important;
   opacity: .7;
   outline: none;
   border:none;
   color: #fff  !important;
   border-radius: 9px;
}
.registerBox .el-button.is-plain:focus, .el-button.is-plain:hover{
    background: #f5bf02;
    color: #fff;
}
</style>
