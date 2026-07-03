<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
})

const emit = defineEmits(['update:modelValue'])

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
}

const close = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/50 px-4 py-6"
    >
      <div
        class="absolute inset-0"
        @click="close"
      />

      <section
        :class="[
          'relative w-full rounded-2xl border border-stone-200 bg-white shadow-xl',
          sizeClasses[size] || sizeClasses.md,
        ]"
      >
        <header class="flex items-start justify-between gap-4 border-b border-stone-200 px-6 py-5">
          <div>
            <h2
              v-if="title"
              class="text-lg font-bold text-stone-900"
            >
              {{ title }}
            </h2>

            <p
              v-if="description"
              class="mt-1 text-sm leading-6 text-stone-500"
            >
              {{ description }}
            </p>
          </div>

          <button
            type="button"
            class="rounded-full p-2 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900"
            aria-label="Cerrar modal"
            @click="close"
          >
            ✕
          </button>
        </header>

        <div class="px-6 py-5">
          <slot />
        </div>

        <footer
          v-if="$slots.footer"
          class="flex justify-end gap-3 border-t border-stone-200 px-6 py-4"
        >
          <slot name="footer" />
        </footer>
      </section>
    </div>
  </Teleport>
</template>
