<script setup>
import { Icon } from "@iconify/vue";
import { appNavigation } from "./appNavigation";

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  isCollapsed: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close", "toggle-collapse"]);
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-30 bg-stone-950/50 lg:hidden"
    @click="$emit('close')"
  />

  <aside
    :class="[
      'fixed inset-y-0 left-0 z-40 w-72 border-r border-emerald-950/40 bg-emerald-950 px-5 py-6 text-white transition-all duration-300',
      isOpen ? 'translate-x-0' : '-translate-x-full',
      isCollapsed ? 'lg:w-24 lg:px-4' : 'lg:w-72',
      'lg:translate-x-0',
    ]"
  >
    <div
      :class="[
        'mb-8 flex items-center border-b border-white/10 pb-6',
        isCollapsed ? 'lg:justify-center' : 'justify-between',
      ]"
    >
      <div
        :class="[
          'flex items-center gap-3',
          isCollapsed ? 'lg:justify-center' : '',
        ]"
      >
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold"
        >
          UE
        </div>

        <div
          :class="[
            'transition-all duration-200',
            isCollapsed ? 'lg:hidden' : '',
          ]"
        >
          <p class="text-sm font-bold">Brief Digital</p>

          <p class="text-xs text-emerald-100/70">Gestión institucional</p>
        </div>
      </div>

      <button
        type="button"
        class="flex h-9 w-9 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/10 hover:text-white lg:hidden"
        aria-label="Cerrar menú"
        @click="$emit('close')"
      >
        <Icon icon="lucide:x" class="h-5 w-5" />
      </button>

      <button
        type="button"
        class="hidden h-9 w-9 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/10 hover:text-white lg:flex"
        :aria-label="isCollapsed ? 'Expandir menú' : 'Colapsar menú'"
        @click="$emit('toggle-collapse')"
      >
        <span v-if="isCollapsed"
          ><Icon icon="lucide:chevron-right" class="h-5 w-5"
        /></span>
        <span v-else><Icon icon="lucide:chevron-left" class="h-5 w-5" /></span>
      </button>
    </div>

    <nav class="space-y-2">
      <RouterLink
        v-for="item in appNavigation"
        :key="item.to"
        :to="item.to"
        :title="isCollapsed ? item.label : ''"
        :class="[
          'flex items-center rounded-xl text-sm font-semibold text-emerald-50 transition hover:bg-white/10 hover:text-white',
          isCollapsed ? 'lg:justify-center lg:px-2 lg:py-3' : 'gap-3 px-4 py-3',
        ]"
        active-class="bg-white text-emerald-950 hover:bg-white hover:text-emerald-950"
        @click="$emit('close')"
      >
        <span
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10"
        >
          <Icon :icon="item.icon" class="h-4 w-4" />
        </span>

        <span
          :class="[
            'transition-all duration-200',
            isCollapsed ? 'lg:hidden' : '',
          ]"
        >
          {{ item.label }}
        </span>
      </RouterLink>
    </nav>
  </aside>
</template>
