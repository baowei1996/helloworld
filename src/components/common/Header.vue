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
            <div class="col-2">
                <router-link to="/login" class="btn btn-primary">登录</router-link>
                <router-link to="/register" class="btn btn-primary">注册</router-link>
            </div>
        </div>
    </div>
</template>