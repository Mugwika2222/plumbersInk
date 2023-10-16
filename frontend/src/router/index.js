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


// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
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
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: '/',
    name: 'landing',
    component: () => import(/* webpackChunkName: "about" */ '../views/LandingView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
  
  },
  {
    path: '/plumber-dashboard',
    name: 'plumberdashboard',
    component: () => import('../views/PlumbersDashboardView.vue'),
  },
  
  {
    path: '/user-dashboard',
    name: 'userdashboard',
    component: () => import('../views/UserDashboardView.vue'),
   
  },

  {
    path: '/phone',
    name: 'phone',
    component: () => import('../views/PhoneView.vue'),
    meta: {
      isLoggedIn: true, 
    },
   
  },
 
  {
    path: '/verify-email/:token',
    name: 'verify-email',
    component: () => import('../views/VerifyEmailView.vue'),
  },
  {
    path: '/forgot-password/:token',
    name: 'forgot-password',
    component: () => import('../views/ResetPasswordView.vue'),
  },
 
  {
    path: '/notfound',
    name: 'notFound',
    component: () => import('../views/NotFoundView.vue'),
  },
  { 
    path: '/:catchAll(.*)', // Match all unmatched routes
    redirect: '/notfound', 
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(route => route.meta.isLoggedIn)) {
    const isLoggedIn = store.state.isLoggedIn; // Check if the user is logged in

    if (!isLoggedIn) {
      // User is not logged in, redirect to the login page
      next('/auth/login');
    } else {
      // User is logged in, check if they have the required roleIds
      const requiredRoleIds = to.meta.requiredRoleIds; // Get required roleIds from the route's meta

      if (requiredRoleIds) {
        // User roleIds are stored in localStorage as an array of roleIds
        const userRoleIds = JSON.parse(localStorage.getItem('roleIds'));

        // Check if the user has any of the required roleIds
        const hasRequiredRoleId = userRoleIds.some(roleId => requiredRoleIds.includes(roleId));

        if (hasRequiredRoleId) {
          // User has the required role, allow access to the route
          next();
        } else {
          // User does not have the required role, redirect to /notfound or another appropriate route
          next('/notfound');
        }
      } else {
        // No specific roleIds are required, allow access to the route
        next();
      }
    }
  } else {
    // This route does not require authentication, allow access for all users
    next();
  }
});
export default router
