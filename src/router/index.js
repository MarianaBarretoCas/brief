import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import BriefFormView from "../views/BriefFormView.vue";
import BriefProgramsView from "../views/BriefProgramsView.vue";
import BriefCreativeInputsView from "../views/BriefCreativeInputsView.vue";
import BriefPreviewView from "../views/BriefPreviewView.vue";
import BriefDetailView from "../views/BriefDetailView.vue";

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
    component: DashboardView,
  },
  {
    path: "/briefs/create",
    name: "brief-create",
    component: BriefFormView,
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
