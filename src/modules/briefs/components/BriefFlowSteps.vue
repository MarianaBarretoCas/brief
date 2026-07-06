<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  briefId: {
    type: String,
    default: 'BRF-2026-001',
  },
})

const route = useRoute()

const steps = computed(() => [
  {
    number: 1,
    label: 'Datos generales',
    routeName: 'brief-create',
    to: {
      name: 'brief-create',
    },
  },
  {
    number: 2,
    label: 'Programas',
    routeName: 'brief-programs',
    to: {
      name: 'brief-programs',
      params: {
        id: props.briefId,
      },
    },
  },
  {
    number: 3,
    label: 'Insumos creativos',
    routeName: 'brief-creative-inputs',
    to: {
      name: 'brief-creative-inputs',
      params: {
        id: props.briefId,
      },
    },
  },
  {
    number: 4,
    label: 'Vista previa',
    routeName: 'brief-preview',
    to: {
      name: 'brief-preview',
      params: {
        id: props.briefId,
      },
    },
  },
])

const currentStepIndex = computed(() => {
  return steps.value.findIndex((step) => step.routeName === route.name)
})

const getStepState = (index, step) => {
  if (route.name === step.routeName) {
    return 'active'
  }

  if (currentStepIndex.value !== -1 && index < currentStepIndex.value) {
    return 'completed'
  }

  return 'pending'
}
</script>

<template>
  <ol class="space-y-3 text-sm">
    <li
      v-for="(step, index) in steps"
      :key="step.routeName"
    >
      <RouterLink
        :to="step.to"
        :class="[
          'group flex items-center gap-3 rounded-xl px-2 py-2 transition',
          getStepState(index, step) === 'active'
            ? 'bg-emerald-50 font-semibold text-emerald-800'
            : '',
          getStepState(index, step) === 'completed'
            ? 'text-emerald-700 hover:bg-emerald-50'
            : '',
          getStepState(index, step) === 'pending'
            ? 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
            : '',
        ]"
      >
        <span
          :class="[
            'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition',
            getStepState(index, step) === 'active'
              ? 'bg-emerald-100 text-emerald-800'
              : '',
            getStepState(index, step) === 'completed'
              ? 'bg-emerald-100 text-emerald-700'
              : '',
            getStepState(index, step) === 'pending'
              ? 'bg-stone-100 text-stone-500 group-hover:bg-stone-200'
              : '',
          ]"
        >
          {{ step.number }}
        </span>

        <span>
          {{ step.label }}
        </span>
      </RouterLink>
    </li>
  </ol>
</template>
