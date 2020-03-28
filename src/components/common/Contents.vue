<template>
    <div class="tab-pane container" id="course_list">
                      <ul class="list-group" v-for="(sub,index) in pages" :key="index">
                          <li class="list-group-item" v-for="(item,key) in sub.subcourses" :key="key">{{item.title}}</li>
                        </ul>
                  </div>
</template>

<script>
export default {
    name: 'Contents',
    data(){
        return{
            // list:[
            //     '第一课','第二课','第三课','第四课'
            // ]
        }
    },
    props:['pages']
}
</script>