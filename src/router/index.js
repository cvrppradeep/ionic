import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import SampleComponents from '@/components/SampleComponents'
import firstpage from '@/components/firstpage'
import pageno from '@/components/pageno'
import datetime from '@/components/datetime'
import input from '@/components/input'
import Range from '@/components/Range'
import signup from '@/components/signup'
import Iot from '@/components/Iot'
import List from '@/components/List'
import details from '@/components/details'
import Page2 from '@/components/Page2'
import slide from '@/components/slide'
import menu from '@/components/menu'
import shop from '@/components/shop'
import sign from '@/components/sign'
import cart from '@/components/cart'
import details1 from '@/components/details1'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    },
    {

      path: '/sign',
      name: 'sign',
      component: sign
    },

    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/slide',
      name: 'slide',
      component: slide
    },
    {
      path: '/details1',
      name: 'details1',
      component: details1
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },

    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/Range',
      name: 'Range',
      component: Range
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    {
      path: '/sample',
      name: 'SampleComponents',
      component: SampleComponents
    },
    {
      path: '/datetime',
      name: 'datetime',
      component: datetime
    },
    {
      path: '/pageno',
      name: 'pageno',
      component: pageno
    },
    {
      path: '/firstpage',
      name: 'firstpage',
      component: firstpage
    },
    {
      path: '/iot',
      name: 'Iot',
      component: Iot
    },
    {
      path: '/page2',
      name: 'Page 2',
      component: Page2
    }
  ]
})
