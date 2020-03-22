<template>
    <div class="container-fluid">
        <div id="course_card" class="card row" style="display: flex;flex-flow: row;">
            <div class="col-6"><img :src="course.avatarUrl" width="510"></div>
            <div id="course_info" class="col-4">
              <h3>{{course.name}}</h3>
              <div>
                <p>讲师：{{course.teacher.userName}}</p>
                <p>参与人数：{{course.studentNum}}人</p>
              </div>
              <input type="button" class="btn btn-success" value="参与课程"  @click="gotoStudy">
            </div>
            <div id="course_share" class="col-2">
              <input type="button" class="btn btn-primary" value="分享">
            </div>
          </div>
    </div>
</template>

<script>
export default {
    name:'CoursePanel',
    data(){
        return{
            // course:{
            //     courseImg : "https://edu-image.nosdn.127.net/053A16934C40E356C845B5C073FA9FF3.png?",
            //     courseName : "Lily英语小知识（每周更新）",
            //     teacher : "Lily",
            //     studentNum : 123
            // }
        }
    },
    props:['course'],
    methods:{
      gotoStudy(){
        this.$router.push("/study/"+this.course.id)
      }
    }
}
</script>