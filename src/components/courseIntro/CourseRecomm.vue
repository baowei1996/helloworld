<template>
    <div id="course_recom">
                  <h4>推荐课程</h4>
                  <ul class="list-group">
                    <li class="list-group-item" v-for="(course,index) in recom_courses" :key="index">
                      <div class="card">
                        {{course}}
                      </div>
                    </li>>
                  </ul>
                </div>
</template>

<script>
export default {
    name:"CourseRecomm",
    data(){
        return{
            recom_courses:["推荐课程1","推荐课程2"]
        }
    }
}
</script>