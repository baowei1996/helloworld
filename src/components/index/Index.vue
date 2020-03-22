<template>
    <div>
    <Header></Header>
    <index1></index1>
    <index2></index2>
    </div>
</template>

<script>
import Header from '../common/Header'
import Index1 from './Index1'
import Index2 from './Index2'
export default {
    name:"Index",
    components:{
        Header,Index1,Index2}
}
</script>