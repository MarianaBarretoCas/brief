<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
  },
})

const badgeClasses = computed(() => {
  const variants = {
    default: 'border-stone-200 bg-stone-100 text-stone-700',
    draft: 'border-yellow-200 bg-yellow-50 text-yellow-700',
    validated: 'border-blue-200 bg-blue-50 text-blue-700',
    submitted: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    returned: 'border-rose-200 bg-rose-50 text-rose-700',
    closed: 'border-stone-300 bg-stone-200 text-stone-700',
  }

  return [
    'inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold',
    variants[props.variant] || variants.default,
  ]
})
</script>

<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>
