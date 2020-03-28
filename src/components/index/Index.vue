<template>
    <div>
    <Header :logined="logined"></Header>
    <index1 :logined="logined"></index1>
    <index2></index2>
    </div>
</template>

<script>
import {setCookie,getCookie} from '../../assets/js/cookie.js'
import Header from '../common/Header'
import Index1 from './Index1'
import Index2 from './Index2'
export default {
    name:"Index",
    components:{
        Header,Index1,Index2
    },
    data(){
        return{
            logined:""
        }
    },
    mounted(){
        this.check_Login()
    },
    methods:{
        check_Login(){
            var sessionKey = getCookie("sessionKey");
            this.logined = (sessionKey != "")
        }
    }
}
</script>