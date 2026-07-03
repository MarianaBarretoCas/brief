<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <BaseCard>
    <div
      v-if="title || description || $slots.actions"
      class="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h2
          v-if="title"
          class="text-lg font-bold text-stone-900"
        >
          {{ title }}
        </h2>

        <p
          v-if="description"
          class="mt-1 text-sm text-stone-500"
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
    </div>

    <div
      v-if="$slots.toolbar"
      class="mb-5"
    >
      <slot name="toolbar" />
    </div>

    <div class="overflow-x-auto rounded-xl border border-stone-200">
      <table class="w-full min-w-[760px] border-collapse bg-white text-sm">
        <slot />
      </table>
    </div>
  </BaseCard>
</template>