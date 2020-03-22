<template>
    <div class="container">
        <div class="col">
            <div class="form-login" action="/login/" method="post">
                <h3 class="text-center">管理员登录</h3>
                <div class="form-group">
                    <label for="id_username">用户名：</label>
                    <input type="text" name='username' class="form-control" id="id_username" placeholder="Username" autofocus required>
                </div>
                <div class="form-group">
                    <label for="id_password">密码：</label>
                    <input type="password" name='password' class="form-control" id="id_password" placeholder="Password" required>
                </div>
                <div>
                    <button class="btn btn-primary float-right" style="margin-right:330px" @click="AdminLogin">登录</button>
                </div>
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
        AdminLogin(){
            var _this = this;
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
        },
    }
}

</script>