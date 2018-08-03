<template>
    <div class="logincontent">
        <div class="topHead">
            <span class="lbtn goback" @click="goback">
                <img  src="../assets/icon/gobackIcon@2x.png">
            </span>
        </div>
        <div class="textB">LOGIN</div>
        <div class="loginBox">
            <div  class="lgIpt"><Icon class="icon" size="18" type="ios-person-outline" /><input v-model="user" placeholder="请输入用户名"/></div>
            <div class="lgIpt"><Icon  class="icon" size="18" type="ios-lock-outline" /><input v-model="psd" type="password"  placeholder="请输入密码"/></div>            
            <!-- <div><button class="logonGO" @click="login"  type="button">登录</button></div> -->
            <div><el-button :plain="true"  @click="login()"   :disabled="lgDisbf()" :loading="lgLdg" class="logonGO" >登录</el-button></div>
        </div>
        <div class="regLink" @click="goRegi">没有账号？注册</div>
    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
            user:'',
            psd:'',
            lgDisb:true,
            lgLdg:false
        }
    },methods:{
        lgDisbf(){
            this.lgDisb = this.user && this.psd ? false:true;
            return this.lgDisb;                
        },
        goback(){
            this.$router.go(-1)
        },
        goRegi(){
            this.$router.push("/register")
        },
        login(){
            this.lgLdg = true;
            let lguesr = new RegExp('^[\\w-]{4,16}$');
            let lgpsd = new RegExp('^[\\w-]{4,16}$');
            if(!lguesr.test(this.user)){
                this.$Message.info('请输入4-16位用户名');
                this.lgLdg = false;
                return;
            }else if(!lgpsd.test(this.psd)){
                this.$Message.info('请输入4-16位密码');
                this.lgLdg = false;
                return;
            }
            Bmob.initialize("25426e2c7231c8d3310231bbabc08254", "84cf68990b8e5b67b59eab3f57dc583d");
            // Bmob 云数据库
            let _this = this;
            Bmob.User.logIn(this.user, this.psd, {
                success: function (user) {
                    var arr = [{
                        LoginState: true,
                        Name: _this.user
                    }];
                    localStorage.setItem('LOGINIFOCS', JSON.stringify(arr));
                    _this.$router.go(-1);
                },
                error: function (user, error) {
                    _this.lgLdg = false;
                    if(error.code == 101){
                        _this.$message('用户名或密码不正确');
                    }
                }
            })
        }
    }
}
</script>
<style scoped>
.logincontent{
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
.loginBox .lgIpt{
    display: inline-block;
    position: relative;
    /* border:1px solid red; */
    width: 70%;
}
.loginBox .lgIpt .icon{
    position: absolute;
    top:50%;
    left:5px;
    
}
.loginBox .lgIpt input{    
    width: 100%;
    margin-top:20px;
    outline: none;
    border:1px solid transparent;
    border-bottom:1px solid #f5bf02;
    padding: 7px 7px 7px 25px;
}
.logonGO{
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
.regLink{
    width:70%;
    text-align: right;
    margin: 15px auto;
    text-decoration: underline;
}
.loginBox .is-disabled{
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
.loginBox .el-button.is-plain:focus, .el-button.is-plain:hover{
    background: #f5bf02;
    color: #fff;
}
</style>
