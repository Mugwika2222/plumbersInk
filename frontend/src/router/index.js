import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'



import Admin from "@/layouts/AdminView.vue";
import Auth from "@/layouts/AuthView.vue";

// views for Admin layout

import Dashboard from "@/views/admin/DashboardView.vue";
import Settings from "@/views/admin/SettingsView.vue";
import Tables from "@/views/admin/TablesView.vue";




// views for Auth layout

import Login from "@/views/auth/LoginView.vue";
import Register from "@/views/auth/RegisterView.vue";


// views without layouts

import Landing from "@/views/LandingView.vue";
import Profile from "@/views/ProfileView.vue";
import Home from "@/views/HomeView.vue";
import Notification from "@/views/NotificationView.vue";



const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
        meta: { isLoggedIn: true}
      },
      {
        path: "/admin/settings",
        component: Settings,
        meta: { isLoggedIn:true}
      },
      {
        path: "/admin/tables",
        component: Tables,
        meta: { isLoggedIn: true}
      },
     
     
    ],
  },
  
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
        meta: { isLoggedIn: false}
      },
      {
        path: "/auth/register",
        component: Register,
        meta: { isLoggedIn: false}
      },
    
    ],
  },
  {
    path: "/home",
    component: Home,
    meta: { isLoggedIn:true}
  },
  {
    path: "/notification",
    component: Notification,
    meta: { isLoggedIn:true}
  },
  {
    path: "/profile",
    component: Profile,
    meta: { isLoggedIn:true}
  },
  {
    path: "/",
    component: Landing,
    meta: { isLoggedIn: false}
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if ('isLoggedIn' in to.meta, to.meta.isLoggedIn && !store.state.isLoggedIn) {
    next('/auth/login')
  }else if('isLoggedIn' in to.meta, !to.meta.isLoggedIn && store.state.isLoggedIn){
    next("/admin/dashboard")
  }else{
    next()
  }
})
export default router
