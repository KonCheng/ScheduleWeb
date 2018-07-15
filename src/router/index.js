import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'
import OneTimeSchedule from '@/views/OnetimeSchedule'
import RepeatSchedule from '@/views/RepeatSchedule'
import CornSchedule from '@/views/CornSchedule'
import FileSchedule from '@/views/FileSchedule'
import PersonalInformation from '@/views/PersonalInformation'
import Group from '@/views/Group'
import Job from '@/views/Job'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'file',
          title: '从文件导入 - 定时任务管理系统',
          name: 'FileSchedule',
          component: FileSchedule
        },
        {
          path: '/onetime',
          name: 'OneTimeSchedule',
          component: OneTimeSchedule,
          meta: {
            title: '单次任务-定时任务管理系统'
          }
        },
        {
          path: '/repeat',
          name: 'RepeatSchedule',
          component: RepeatSchedule,
          meta: {
            title: '简单循环-定时任务管理系统'
          }
        },
        {
          path: '/corn',
          name: 'CornSchedule',
          component: CornSchedule,
          meta: {
            title: '高级任务-定时任务管理系统'
          }
        },
        {
          path: '/u/:user',
          name: 'PersonalInformation',
          component: PersonalInformation,
          meta: {
            title: '个人信息-定时任务管理系统'
          }
        },
        {
          path: '/g/:group',
          name: 'PersonalInformation',
          component: PersonalInformation,
          meta: {
            title: '个人信息-定时任务管理系统'
          }
        },
        {
          path: '/j/:group/:name',
          name: 'PersonalInformation',
          component: PersonalInformation,
          meta: {
            title: '个人信息-定时任务管理系统'
          }
        }
      ],
      meta: {
        title: '首页-定时任务管理系统'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录-定时任务管理系统'
      }
    }
  ]
})
