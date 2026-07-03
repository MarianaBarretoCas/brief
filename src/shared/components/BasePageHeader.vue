<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  eyebrow: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <header class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <div>
      <p
        v-if="eyebrow"
        class="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700"
      >
        {{ eyebrow }}
      </p>

      <h1 class="text-3xl font-bold tracking-tight text-stone-900">
        {{ title }}
      </h1>

      <p
        v-if="description"
        class="mt-2 max-w-3xl text-sm leading-6 text-stone-500"
      >
        {{ description }}
      </p>
    </div>

    <div
      v-if="$slots.actions"
      class="flex flex-wrap items-center gap-3"
    >
      <slot name="actions" />
    </div>
  </header>
</template>
