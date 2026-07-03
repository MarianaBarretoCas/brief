<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="rounded-2xl border border-stone-200 bg-gray-50 p-6 shadow-sm">
    <header v-if="title || subtitle" class="mb-5">
      <h2 v-if="title" class="text-lg font-bold text-emerald-950">
        {{ title }}
      </h2>

      <p v-if="subtitle" class="mt-1 text-sm text-green-500">
        {{ subtitle }}
      </p>
    </header>

    <slot />
  </section>
</template>
