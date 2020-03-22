<template>
    <div class="container">
        <div class="col">
            <h3 class="text-center">欢迎登录</h3>
            <div style="width:400px; margin-left:350px">
                <div style="margin-right:330px">
                    <label>用户名：</label>
                </div>
                <input v-model="userName" type="text" name='username' class="form-control" id="id_username" placeholder="Username" autofocus required>
            </div>
            <div style="width:400px; margin-left:350px;margin-top:9px">
                <div style="margin-right:330px">
                    <label for="id_password">密码：</label>
                </div>
                <input v-model="password" type="password" name='password' class="form-control" id="id_password" placeholder="Password" required>
            </div>
            <div class="btn-group" data-toggle="buttons" style="width: 400px;margin-top:20px;margin-left:20px">
                <label  class="btn btn-info" @click="label_Student">
                    <input v-model="checked" type="radio" name="options"> 学生
                </label>
                <label  class="btn btn-info" @click="label_Teacher">
                    <input v-model="checked" type="radio" name="options"> 教师
                </label>
            </div>
            <div style="margin-top:10px">
                <router-link to="/register" class="btn btn-primary" style="margin-left:115px">新用户注册</router-link>
                <button class="btn btn-primary float-right" style="margin-right:330px" @click="Login">登录</button>
            </div>                
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            checked: "",    //接口额外需要加入checked检查是教师还是学生
            userName:"",
            password:"",
        }
    },
    methods:{
        Login(){
            var _this = this;
            if(this.checked == "student")
            {
                this.$axios.post("/user/login/student",{
                    "userName":_this.userName,
                    "password":_this.password,
                },{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(response){
                    console.log(response)
                }).catch(function(error){
                    console.log("用户名或密码错误")
                })
            }
            else if(this.checked == "teacher")
            {
                this.$axios.post("/user/login/teacher",{
                    "userName":_this.userName,
                    "password":_this.password,
                },{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(response){
                    console.log(response)
                }).catch(function(error){
                    console.log("用户名或密码错误")
                })
            }
        },
        label_Student()
        {
            this.checked = "student"
        },
        label_Teacher()
        {
            this.checked = "teacher"
        }
    }
}

</script>