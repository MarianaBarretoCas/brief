<script setup>
defineProps({
  title: {
    type: String,
    default: 'No hay información disponible',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-6 py-10 text-center">
    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-stone-400 shadow-sm">
      <slot name="icon">
        —
      </slot>
    </div>

    <h3 class="text-base font-bold text-stone-900">
      {{ title }}
    </h3>

    <p
      v-if="description"
      class="mx-auto mt-2 max-w-md text-sm leading-6 text-stone-500"
    >
      {{ description }}
    </p>

    <div
      v-if="$slots.actions"
      class="mt-5 flex justify-center gap-3"
    >
      <slot name="actions" />
    </div>
  </div>
</template>
