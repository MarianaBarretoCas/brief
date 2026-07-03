<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="grid gap-1.5">
    <label v-if="label" class="text-sm font-semibold text-emerald-900">
      {{ label }}
      <span v-if="required" class="text-red-600">*</span>
    </label>

    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-emerald-950 outline-none transition placeholder:text-emerald-950 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-50"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <p v-if="error" class="text-xs font-medium text-red-600">
      {{ error }}
    </p>
  </div>
</template>
