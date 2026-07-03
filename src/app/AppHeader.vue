<script setup>
import { Icon } from "@iconify/vue";
defineEmits(["open-sidebar"]);
</script>
<template>
  <header
    class="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-stone-200 bg-white/90 px-6 backdrop-blur"
  >
    <button
      type="button"
      class="mr-3 flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 transition hover:bg-stone-100 lg:hidden"
      aria-label="Abrir menú"
      @click="$emit('open-sidebar')"
    >
      <Icon icon="lucide:menu" class="h-5 w-5" />
    </button>
    <img
      src="/public/logo-uec.jpg"
      alt="Logo Universidad Externado de Colombia"
      class="h-11 w-45"
    />
    <div>
      <h1 class="mt-1 text-lg font-bold text-stone-900">
        Brief Digital Institucional
      </h1>
    </div>

    <div class="flex items-center gap-4">
      <div class="hidden text-right md:block">
        <p class="text-sm font-semibold text-stone-900">Usuario solicitante</p>

        <p class="text-xs text-stone-500">usuario@uexternado.edu.co</p>
      </div>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-sm font-bold text-emerald-800"
      >
        U
      </button>
    </div>
  </header>
</template>
