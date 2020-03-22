<template>
    <div>
        <MyHead></MyHead>
        <CoursePanel :course="course"></CoursePanel>
        <CourseDetails :teacher="course.teacher" :description="course.description" :score="course.score" :pages="course.pages"></CourseDetails>
    </div>
</template>

<script>
import CoursePanel from './CoursePanel.vue'
import MyHead from '../common/MyHead'
import CourseDetails from "./CourseDetails"

export default {
    name : "CourseIntro",
    components :{
        MyHead,CoursePanel,CourseDetails
	},
    data(){
        return{
            course: {
	              "id": 1102,
	              "courseNum": "",
	              "teacher": {
	                      "id": 1102,
	                      "userName": "Lily",
	                      "realName": "Lily",
	                      "phone": "",
	                      "email": "",
	                      "avatarUrl": "",
	                      "description": ""
                  },
	              "studentNum": 123,
	              "name": "Lily英语小知识（每周更新）",
	              "score": "4.9",
	              "pages": ['第一课','第二课','第三课','第四课'],
	              "startTime": "",
	              "weeks": 0,
	              "description": "xxxxxxxx",
	              "note": "",
	              "avatarUrl": "https://edu-image.nosdn.127.net/053A16934C40E356C845B5C073FA9FF3.png?"
              }
        }
	},
	created(){
		console.log(this.$route)
		this.getCourseInfo(this.$route.params.courseId)
	},
	methods:{
		getCourseInfo(courseId){
			var _this = this;
			this.$axios.get('/course/course?courseId='+courseId)
			.then(function(response){
				_this.course = response.data
				console.log(response)
			}).catch(function(error){
				console.log(error)
			})
		}
	}
}
</script>