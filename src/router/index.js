import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StudyCenter from '@/components/studycenter/StudyCenter'
import CourseIntro from '@/components/courseIntro/CourseIntro'
import UserCenter from '@/components/usercenter/UserCenter'
import Register from '@/components/Register'
import Login from '@/components/Login'
import  Index from '@/components/index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Index',
      component:Index
    },
    {
      path: '/courseInfo/:courseId',
      name: 'CourseIntro',
      component: CourseIntro
    },
    {
      path: '/study/:courseId',
      name: 'StudyCenter',
      component: StudyCenter
    },
    {
      path: '/user',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
