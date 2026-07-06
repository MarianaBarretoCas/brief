  <script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <label class="flex cursor-pointer gap-3 rounded-xl border border-stone-200 bg-white p-4 transition hover:border-emerald-300 hover:bg-emerald-50/40">
    <input
      type="checkbox"
      :checked="modelValue"
      class="mt-1 h-4 w-4 rounded border-stone-300 text-emerald-700 focus:ring-emerald-600"
      @change="$emit('update:modelValue', $event.target.checked)"
    />

    <span>
      <span class="block text-sm font-semibold text-stone-900">
        {{ label }}
      </span>

      <span
        v-if="description"
        class="mt-1 block text-xs leading-5 text-stone-500"
      >
        {{ description }}
      </span>
    </span>
  </label>
</template>
