<template>
    <div id="my_course">
            <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#course">课程介绍</a>
                    </li>
                    <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#luntan">论坛</a>
                    </li>
                  </ul>

                  <div class="tab-content">
                      <div id="course" class="tab-pane container active">
                            <div style="display: flex;flex-direction: row;">
                                    <div class="card" style="width:200px;margin: 5px;" v-for="(course,index) in myCourses" :key="index">
                                            <img class="card-img-top" :src="course.avatarUrl" alt="Card image">
                                            <div class="card-body">
                                              <h4 class="card-title">{{course.name}}</h4>
                                              <p class="card-text">{{course.description}}</p>
                                              <div class="progress" style="height: 10px; margin-bottom: 5px;">
                                                    <div class="progress-bar bg-success" style="width:40%"></div>
                                              </div>
                                              <router-link :to="'courseInfo/'+course.id" class="btn btn-primary">继续学习</router-link>
                                            </div>
                                    </div>
                            </div>
                      </div>

                      <div id="luntan" class="tab-pane container">
                          论坛
                      </div>
                  </div>
    </div>
</template>

<script>
export default {
    name: 'MyCourse',
    data(){
            return{
                    myCourses:[
                             {
	              "id": 1102,
	              "courseNum": "",
	              "teacher": {
	                      "id": 1102,
	                      "userName": "",
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
              },
               {
	              "id": 1102,
	              "courseNum": "",
	              "teacher": {
	                      "id": 1102,
	                      "userName": "",
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
                    ]
            }
    }
}
</script>