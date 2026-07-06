<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 5,
  },
  required: {
    type: Boolean,
    default: false,
  },
  maxLength: {
    type: Number,
    default: null,
  },
  error: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="grid gap-1.5">
    <div class="flex items-center justify-between gap-4">
      <label v-if="label" class="text-sm font-semibold text-stone-700">
        {{ label }}
        <span v-if="required" class="text-red-600">*</span>
      </label>

      <span v-if="maxLength" class="text-xs text-stone-500">
        {{ modelValue.length }} / {{ maxLength }}
      </span>
    </div>

    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :maxlength="maxLength || undefined"
      class="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-emerald-950 outline-none transition placeholder:text-emerald-900 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-50"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <p v-if="error" class="text-xs font-medium text-red-600">
      {{ error }}
    </p>
  </div>
</template>
