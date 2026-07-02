import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../modules/auth/views/LoginView.vue";

import BriefDashboardView from "../modules/briefs/views/BriefDashboardView.vue";
import BriefCreateView from "../modules/briefs/views/BriefCreateView.vue";
import BriefProgramsView from "../modules/briefs/views/BriefProgramsView.vue";
import BriefCreativeInputsView from "../modules/briefs/views/BriefCreativeInputsView.vue";
import BriefPreviewView from "../modules/briefs/views/BriefPreviewView.vue";
import BriefDetailView from "../modules/briefs/views/BriefDetailView.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: BriefDashboardView,
  },
  {
    path: "/briefs/create",
    name: "brief-create",
    component: BriefCreateView,
  },
  {
    path: "/briefs/:id/programs",
    name: "brief-programs",
    component: BriefProgramsView,
  },
  {
    path: "/briefs/:id/creative-inputs",
    name: "brief-creative-inputs",
    component: BriefCreativeInputsView,
  },
  {
    path: "/briefs/:id/preview",
    name: "brief-preview",
    component: BriefPreviewView,
  },
  {
    path: "/briefs/:id/detail",
    name: "brief-detail",
    component: BriefDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
