import { createRouter, createWebHistory } from 'vue-router'

import AppShell from '../app/AppShell.vue'

import LoginView from '../modules/auth/views/LoginView.vue'

import BriefDashboardView from '../modules/briefs/views/BriefDashboardView.vue'
import BriefCreateView from '../modules/briefs/views/BriefCreateView.vue'
import BriefProgramsView from '../modules/briefs/views/BriefProgramsView.vue'
import BriefCreativeInputsView from '../modules/briefs/views/BriefCreativeInputsView.vue'
import BriefPreviewView from '../modules/briefs/views/BriefPreviewView.vue'
import BriefDetailView from '../modules/briefs/views/BriefDetailView.vue'

import CampaignPlanningView from '../modules/planning/views/CampaignPlanningView.vue'
import TemplatesView from '../modules/admin/views/TemplatesView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      public: true,
    },
  },
  {
    path: '/',
    component: AppShell,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: BriefDashboardView,
        meta: {
          breadcrumb: 'Mis briefs',
        },
      },
      {
        path: 'briefs/create',
        name: 'brief-create',
        component: BriefCreateView,
        meta: {
          breadcrumb: 'Crear brief',
        },
      },
      {
        path: 'briefs/:id/programs',
        name: 'brief-programs',
        component: BriefProgramsView,
        meta: {
          breadcrumb: 'Programas incluidos',
        },
      },
      {
        path: 'briefs/:id/creative-inputs',
        name: 'brief-creative-inputs',
        component: BriefCreativeInputsView,
        meta: {
          breadcrumb: 'Insumos creativos',
        },
      },
      {
        path: 'briefs/:id/preview',
        name: 'brief-preview',
        component: BriefPreviewView,
        meta: {
          breadcrumb: 'Vista previa',
        },
      },
      {
        path: 'briefs/:id/detail',
        name: 'brief-detail',
        component: BriefDetailView,
        meta: {
          breadcrumb: 'Detalle del brief',
        },
      },
      {
        path: 'planning',
        name: 'planning',
        component: CampaignPlanningView,
        meta: {
          breadcrumb: 'Planeación de campaña',
        },
      },
      {
        path: 'admin/templates',
        name: 'admin-templates',
        component: TemplatesView,
        meta: {
          breadcrumb: 'Plantillas',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
