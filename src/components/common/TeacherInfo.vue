<template>
    <div id="teacher_info">
                  <h4>授课教师</h4>
                  <div>
                    <img :src="teacher.avatarUrl" width="75" alt="教师头像">
                    <p>{{teacher.userName}}</p>
                  </div>
                </div>
</template>

<script>
export default {
    name:"TeacherInfo",
    props:['teacher']
}
</script>