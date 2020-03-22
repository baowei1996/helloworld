<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-9">
            <div id="course_detail">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#course_intro">课程介绍</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#course_list">课程目录</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#course_review">课程评价</a>
                  </li>
                </ul>
             
                  <!-- Tab panes -->
                <div class="tab-content">
                  <!-- 课程介绍 -->
                  <Description :description="description"></Description>
                  <!-- 课程目录 -->
                  <Contents :pages="pages"></Contents>
                  <!-- 课程评价 -->
                  <CourseRemark :score="score"></CourseRemark>
                </div>
              </div>
        </div>
        <div class="col-3">
            <div id="course_side" style="float:left;">
                <TeacherInfo :teacher='teacher'></TeacherInfo>
                <CourseRecomm></CourseRecomm>
              </div>
        </div>
      </div>
    </div>
</template>

<script>
import Contents from '../common/Contents'
import TeacherInfo from '../common/TeacherInfo'
import Description from './Description'
import CourseRemark from './CourseRemark'
import CourseRecomm from './CourseRecomm'
export default {
    name : "CourseDetails",
    components:{
      Description,Contents,CourseRemark,TeacherInfo,CourseRecomm
    },
    props:['teacher','description','score','pages']
}
</script>