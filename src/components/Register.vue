<template>
    <div class="container">
        <div class="col">
            <h3 class="text-center">欢迎注册</h3>
            <div class="form-group">
                <label for="id_username">用户名：</label>
                <input type="text" name='username' class="form-control" id="id_username" placeholder="Username" autofocus required>
            </div>
            <div class="form-group">
                <label for="id_password">密码：</label>
                <input type="password" name='password' class="form-control" id="id_password" placeholder="Password" required>
            </div>
            <div class="form-group">
                <label for="id_password">确认密码：</label>
                <input type="password" name='password' class="form-control" id="id_password" placeholder="Password" required>
            </div>
            <label for="user_type">性别:</label>
            <div class="btn-group" data-toggle="buttons" style="width: 370px">
                <label  class="btn btn-info">
                    <input  type="radio" name="options" @click="Sex_male"> 男
                </label>
                <label  class="btn btn-info">
                    <input  type="radio" name="options" @click="Sex_female"> 女
                </label>
            </div>
            <label for="user_type">用户类型:</label>
            <div class="btn-group" data-toggle="buttons" style="width: 370px">
                <label  class="btn btn-info" @click="Rlabel_student">
                    <input  type="radio" name="options"> 学生
                </label>
                <label  class="btn btn-info" @click="Rlabel_teacher">
                    <input  type="radio" name="options"> 教师
                </label>
            </div>

            <div>
                <router-link to="/login"><ins>直接登录</ins></router-link>
                <button class="btn btn-primary float-right" style="margin-right:330px" @click="Register">注册</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            userName:"",
            password:"",
        }
    },
    methods:{
        Register()
        {
            var _this = this;
            if(this.checked == "student")
            {
                this.$axios.post("/user/register/student",{
                    "userName":_this.userName,
                    "password":_this.password,
                },{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(response){
                    console.log(response)
                }).catch(function(error){
                    console.log("用户名或密码不符合规范")
                })
            }
            else if(this.checked == "teacher")
            {
                this.$axios.post("/user/register/teacher",{
                    "userName":_this.userName,
                    "password":_this.password,
                },{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(response){
                    console.log(response)
                }).catch(function(error){
                    console.log("用户名或密码不规范")
                })
            }
        },
        Rlabel_student()
        {
            this.checked = "student"
        },
        Rlabel_teacher()
        {
            this.checked = "teacher"
        },
        Sex_male()
        {
            this.sex = "male"
        },
        Sex_female()
        {
            this.sex = "female"
        }
    }
}
</script>