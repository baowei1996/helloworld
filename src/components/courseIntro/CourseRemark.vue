<template>
    <div class="tab-pane container" id="course_review">
        <StarRemark :size="20" :score="score"></StarRemark>
                    <div id="score">评分：{{score}}</div>
                    <div id="review_panel">
                        <ul class="list-group">
                            <li class="list-group-item" v-for="(remark,index) in remarks" :key="index">
                              <div class="card">
                                {{remark}}
                              </div>
                            </li>
                          </ul>
                    </div>
                  </div>
</template>

<script>
import StarRemark from '../common/StarRemark'

export default {
    name:"CourseRemark",
    components:{
        StarRemark
    },
    props:["score"],
    data(){
        return{
            remarks:[
                "评论1：XXX",
                "评论2：XXXXXXX"
            ]
        }
    },
    methods:{
        getRemarks(){
            console.log("getRemarks")
        }
    }
}
</script>