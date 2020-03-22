<template>
    <div>
        <MyHead></MyHead>
        <!-- <button @click="getUserInfo">获取信息</button>
        <button @click="updateUserInfo">更新信息</button> -->
        <UserPanel :user="user"></UserPanel>
        <MyCourse></MyCourse>
    </div>
</template>

<script>
import MyHead from '../common/MyHead'
import UserPanel from './UserPanel'
import MyCourse from './MyCourse'
export default {
    name:"UserCenter",
    components:{
        MyHead,UserPanel,MyCourse
    },
    data(){
        return{
            isLogin:true,
            user:{}
        }
    },
    created(){
        this.getUserInfo()
    },
    methods:{
        getUserInfo(){
            var _this = this;
            var sessionKey = '67fc1627e8dd513e42010f188bd57aae'
            this.$axios.get("/user/session-key/"+sessionKey+"/student")
            .then(function(response){
                console.log(response.data)
                _this.user = response.data
            })
            .catch(function(error){
                console.log(error)
            })
        },
        updateUserInfo(){
            var _this = this;
            this.$axios.post("/user/student",
             {
                 "userName": _this.user.userName, 
                    "realName": "鲍伟", 
                    "phone": "17864154913", 
                    "email": "a@b.c", 
                    "sex": "男", 
                    "sessionKey": "67fc1627e8dd513e42010f188bd57aae"
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function(response){
                console.log(response.data)
            }).catch(function(error){
                console.log(error)
            })
            
        }
    }
}
</script>