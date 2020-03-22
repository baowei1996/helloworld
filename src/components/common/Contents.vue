<template>
    <div class="tab-pane container" id="course_list">
                      <ul class="list-group">
                          <li class="list-group-item" v-for="(item,key) in pages" :key="key">{{item}}</li>
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