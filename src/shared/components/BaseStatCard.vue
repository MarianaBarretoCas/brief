<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  helper: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <BaseCard>
    <div class="flex items-start justify-between gap-6 md:gap-4">
      <div>
        <p class="text-sm font-medium text-stone-500">
          {{ label }}
        </p>

        <p class="mt-2 text-3xl font-bold text-stone-900">
          {{ value }}
        </p>

        <p v-if="helper" class="mt-1 text-xs text-stone-500">
          {{ helper }}
        </p>
      </div>

      <div
        v-if="$slots.icon"
        class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"
      >
        <slot name="icon" />
      </div>
    </div>
  </BaseCard>
</template>
