<template>
    <div class="container-fluid">
        <div id="user_show" class="card">
            <div class="row">
                <div id="user_avatar" class="col-2">
                    <img width="100px" height="100px" :src="user.avatarUrl">
                </div>
                <div id="user_baseInfo" class="col-6">
                    <h3>{{user.userName}}</h3>
                    <p>XXXXXXXXXXXXXXXXXXX</p>
                </div>
                <div class="col-4">
                    <p>学习总时长</p>
                    <p>{{user.time}}小时</p>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'UserPanel',
    props:['user'],
    data () {
        return {
            // user:{
            //     avatar: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2491588266,1963864761&fm=26&gp=0.jpg',
            //     username:'Mooc_Name',
            //     description: 'xxxxxxxxxxx',
            //     time: 3
            // }
        }
    }
}
</script>