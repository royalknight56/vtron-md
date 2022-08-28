/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-01-13 16:21:36
 * @Description: 
 */

import { defineClientAppEnhance } from '@vuepress/client'
// import MyComponent from './MyComponent.vue'
import win10 from 'vue3-win10';
import "vue3-win10/distlib/style.css"
import win10apphello from "./components/win10apphello.vue"

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('win10apphello', win10apphello)
  app.use(win10)
})

// export default defineClientAppEnhance(({ app, router, siteData }) => {
//   app.use(win10)
//   app.component('win10apphello', win10apphello)
// })