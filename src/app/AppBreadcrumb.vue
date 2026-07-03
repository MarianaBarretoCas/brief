<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumb = computed(() => {
  return route.meta?.breadcrumb || 'Inicio'
})
</script>

<template>
  <div class="flex items-center gap-2 px-6 pt-6 text-sm text-stone-500">
    <RouterLink
      to="/dashboard"
      class="transition hover:text-stone-900"
    >
      Inicio
    </RouterLink>

    <span>/</span>

    <span class="font-semibold text-stone-900">
      {{ breadcrumb }}
    </span>
  </div>
</template>
