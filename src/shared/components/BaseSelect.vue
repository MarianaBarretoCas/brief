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
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "Seleccione una opción",
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

    <select
      :value="modelValue"
      class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-emerald-950 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-50"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="" disabled>
        {{ placeholder }}
      </option>

      <option
        v-for="option in options"
        :key="option.value ?? option"
        :value="option.value ?? option"
      >
        {{ option.label ?? option }}
      </option>
    </select>

    <p v-if="error" class="text-xs font-medium text-red-600">
      {{ error }}
    </p>
  </div>
</template>
