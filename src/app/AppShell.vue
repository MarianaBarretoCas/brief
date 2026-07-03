<script setup>
import { ref } from 'vue'

import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppBreadcrumb from './AppBreadcrumb.vue'

const isSidebarOpen = ref(false)
const isSidebarCollapsed = ref(false)

const openSidebar = () => {
  isSidebarOpen.value = true
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const toggleSidebarCollapse = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>

<template>
  <div class="min-h-screen bg-stone-100">
    <AppSidebar
      :is-open="isSidebarOpen"
      :is-collapsed="isSidebarCollapsed"
      @close="closeSidebar"
      @toggle-collapse="toggleSidebarCollapse"
    />

    <div
      :class="[
        'min-h-screen transition-all duration-300',
        isSidebarCollapsed ? 'lg:pl-24' : 'lg:pl-72',
      ]"
    >
      <AppHeader @open-sidebar="openSidebar" />

      <AppBreadcrumb />

      <main class="px-6 py-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>