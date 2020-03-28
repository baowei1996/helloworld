<template>
    <div class="container-fluid">
        <div class = "row" style="background: #7abaff;color: #000000;">
            <div class = "col-2">
                <a href="" class="btn btn-primary">首页</a>
            </div>
            <div class = "col-2">
                <a href="" class="btn btn-primary">个人中心</a>
            </div>
            <div class = "col-2">
                <a href="" class="btn btn-primary">学生选课</a>
            </div>
            <div class = "col-2">
                <input type="text" class="form-control" style="height: 34px;" placeholder="搜索课程...." autofocus required>
            </div>
            <div class = "col-2">

            </div>
            <div  v-if="logined">
                <router-link to='/user'><p style="flex-grow: 2;">{{user.realName}}</p></router-link>
                <div style="flex-grow: 1;"><img alt="avatar" :src='user.avatarUrl' width="75"></div>
            </div>
            <div v-else>
                <div class="col-2">
                <router-link to="/login" class="btn btn-primary">登录</router-link>
                <router-link to="/register" class="btn btn-primary">注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                avatarUrl : 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2491588266,1963864761&fm=26&gp=0.jpg',
                realName: '鲍伟'
            }
        }
    },
    props:["logined"]
}
</script>