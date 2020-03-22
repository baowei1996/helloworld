<template>
    <div class = "container-fluid" style="height: 550px;background: #ffffff">
        <div style="margin-left: 20px">
            <h5><strong>热门推荐</strong></h5>
        </div>
        <div class="row" style="margin-left: 20px;margin-right: 20px">
             <div class="col-2" v-for="(course,key) in hot_course" :key="key" style="margin:30px" >
                <img :src="course.avatarUrl" class="rounded" alt="Cinque Terre" style="margin-left:30px">
            </div>
        </div>
        <div style="margin-left: 20px">
            <h5><strong>新课推荐</strong></h5>
        </div>
        <div class="row" style="margin-left: 20px;margin-right: 20px">
            <div class="col-2" v-for="(course,key) in new_course" :key="key"  style="margin:30px" >
                    <img :src="course.avatarUrl" class="rounded" alt="Cinque Terre" style="margin-left:30px">
                </div>
        </div>
        <div style="margin-left: 20px">
            <h5><strong>课程列表</strong></h5>
        </div>
        <div class="row" style="margin-left: 20px;margin-right: 20px">
            <div class="col-2" v-for="(course,key) in course_list" :key="key" style="margin:30px" >
                <img :src="course.avatarUrl" class="rounded" alt="Cinque Terre" style="margin-left:30px">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hot_course:[],
            new_course:[],
            course_list:[]
        }
    },
    created(){
        this.get_hotCourses()
        this.get_newCourses()
        this.get_courselist()
    },
    methods :{
        get_hotCourses(){
             var _this = this;
            this.$axios.get("/course/hottest-courses")
            .then(function(response){
                _this.hot_course=response.data.coursesList
                _this.hot_course = _this.replace_img(_this.hot_course)
            }).catch(function(error){
                console.log(error)
            })
        },
        get_newCourses()
        {
            var _this = this;
            this.$axios.get("/course/latest-courses")
            .then(function(response){
                _this.new_course=response.data.coursesList
                _this.new_course = _this.replace_img(_this.new_course)
            }).catch(function(error){
                console.log(error)
            })
        },
        get_courselist()
        {
            var _this = this;
            this.$axios.get("/course/courses")
            .then(function(response){
                _this.course_list=response.data.coursesList
                _this.course_list = _this.replace_img(_this.course_list)
            }).catch(function(error){
                console.log(error)
            })
        },
        replace_img(courses)
        {
            var _courses = courses;
            for(var i =0;i<_courses.length;i++){
                _courses[i].avatarUrl = "https://edu-image.nosdn.127.net/a985769053f94cadb68dae90e9e194b9.png?imageView&quality=100"
            }
            return _courses;
        }
    }
}
</script>