import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/pages/home/Index.vue"
import Films from "@/pages/films/Index.vue"
import Cinemas from "@/pages/cinemas/Index.vue"
import Shop from "@/pages/shop/Index.vue"
import Mine from "@/pages/mine/Index.vue"
import Card from "@/pages/card/Index"


Vue.use(Router)

export default new Router({
  routes: [
    {
    path:"/home",
    component:Home,
    alias:"/"
    },
    {
      path:"/films",
      component:Films
    },
    {
      path:"/cinemas",
      component:Cinemas
    },
    {
      path:"/shop",
      component:Shop
    },
    {
      path:"/mine",
      component:Mine
    },
    {
      path:"/card",
      component:Card
    }
  ]
})
