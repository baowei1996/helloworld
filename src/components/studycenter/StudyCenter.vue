<template>
    <div>
        <MyHead></MyHead>
        <StudyPanel></StudyPanel>
    </div>
</template>

<script>
import MyHead from '../common/MyHead'
import StudyPanel from './StudyPanel'

export default {
    name: 'StudyCenter',
    components:{
        MyHead,StudyPanel
    }
}
</script>