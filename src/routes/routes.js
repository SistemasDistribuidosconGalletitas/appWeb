import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
     
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/Verpacientes',
        name: 'verPacientes',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pacientes/ViewPacientes.vue')
      },
      {
        path: '/Crearpaciente',
        name: 'crearPaciente',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pacientes/CrearPaciente.vue')
      },
      {
        path: '/Icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/Receta/:id',
        name: 'receta',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pacientes/Receta.vue')
      },
      {
        path: '/Medicamento',
        name: 'medicamento',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pacientes/Medicamento.vue')
      }
      ,
      {
        path: '/verRecetas',
        name: 'verrecetas',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pacientes/ViewRecetas.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
