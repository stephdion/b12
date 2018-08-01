import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pack from '@/components/Pack/Pack'
import PackDetail from '@/components/Pack/PackDetail'
import CreatePack from '@/components/Pack/CreatePack'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import AuthGuard from './auth-guard'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/packslist',
      name: 'B12 pack list',
      component: Pack,
      beforeEnter: AuthGuard
    },
    {
      path: '/pack/:id',
      props: true,
      name: 'B12 pack detail',
      component: PackDetail,
      beforeEnter: AuthGuard
    },
    {
      path: '/packcreator',
      name: 'B12 pack creator',
      component: CreatePack,
      beforeEnter: AuthGuard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }, {
      path: '/signin',
      name: 'signin',
      component: Signin
    }

  ],
  mode: 'history'
})
