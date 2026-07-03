<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
  type: {
    type: String,
    default: "button",
  },
  to: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const variantClasses = {
  primary: "bg-emerald-800 text-white border-emerald-900 hover:bg-emerald-700",
  secondary: "bg-green-100 text-emerald-900 border-green-300 hover:bg-green-200",
  third: "bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100",
  completing: "bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100",
  ghost: "bg-transparent text-stone-700 border-transparent hover:bg-stone-100",
  danger: "bg-rose-400 text-white border-rose-500 hover:bg-rose-500",
};

const sizeClasses = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
}

const buttonClasses = computed(() => [
  "inline-flex items-center justify-center gap-2 rounded-xl border font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
  variantClasses[props.variant] || variantClasses.primary,
  sizeClasses[props.size] || sizeClasses.md,
]);
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="buttonClasses">
    <slot />
  </RouterLink>

  <button v-else :type="type" :disabled="disabled" :class="buttonClasses">
    <slot />
  </button>
</template>
