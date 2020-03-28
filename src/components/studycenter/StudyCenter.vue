<template>
    <div>
        <MyHead></MyHead>
        <StudyPanel :course="course"></StudyPanel>
    </div>
</template>

<script>
import MyHead from '../common/MyHead'
import StudyPanel from './StudyPanel'

export default {
    name: 'StudyCenter',
    components:{
        MyHead,StudyPanel
    },
    data(){
        return{
            course:""
        }
    },
    created(){
        this.getCourseInfo(this.$route.params.courseId)
    },
    methods:{
        getCourseInfo(courseId){
			var _this = this;
			this.$axios.get('/course/course?courseId='+courseId)
			.then(function(response){
				_this.course = response.data
				_this.course.pages = JSON.parse(response.data.pages)
			}).catch(function(error){
				console.log(error)
			})
		}
    }
}
</script>