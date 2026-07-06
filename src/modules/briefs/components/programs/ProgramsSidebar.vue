<script setup>
import BriefFlowSteps from '../BriefFlowSteps.vue'

defineProps({
  programs: {
    type: Array,
    required: true,
  },
  activeIndex: {
    type: Number,
    required: true,
  },
  totalLeads: {
    type: Number,
    default: 0,
  },
  estimatedInvestment: {
    type: Number,
    default: 0,
  },
})

defineEmits(['select', 'add', 'remove'])
</script>

<template>
  <aside class="space-y-4">
    <BaseCard
      title="Programas"
      subtitle="Listado de programas incluidos en el brief."
    >
      <div class="space-y-3">
        <button
          v-for="(program, index) in programs"
          :key="program.localId"
          type="button"
          :class="[
            'w-full rounded-xl border p-4 text-left transition',
            activeIndex === index
              ? 'border-emerald-300 bg-emerald-50'
              : 'border-stone-200 bg-white hover:bg-stone-50',
          ]"
          @click="$emit('select', index)"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="text-sm font-bold text-stone-900">
                Programa {{ index + 1 }}
              </p>

              <p class="mt-1 line-clamp-2 text-xs leading-5 text-stone-500">
                {{ program.programName || 'Sin nombre registrado' }}
              </p>
            </div>

            <BaseBadge
              :variant="activeIndex === index ? 'validated' : 'default'"
            >
              {{ activeIndex === index ? 'Activo' : 'Pendiente' }}
            </BaseBadge>
          </div>
        </button>
      </div>

      <div class="mt-5 flex gap-2">
        <BaseButton
          variant="secondary"
          size="sm"
          @click="$emit('add')"
        >
          + Agregar
        </BaseButton>

        <BaseButton
          variant="dangerSoft"
          size="sm"
          :disabled="programs.length === 1"
          @click="$emit('remove', activeIndex)"
        >
          Eliminar
        </BaseButton>
      </div>
    </BaseCard>

    <BaseCard
      title="Resumen"
      subtitle="Cálculos preliminares de los programas."
    >
      <div class="space-y-4 text-sm">
        <div class="flex items-center justify-between">
          <span class="text-stone-500">Total programas</span>
          <span class="font-bold text-stone-900">{{ programs.length }}</span>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-stone-500">Total leads</span>
          <span class="font-bold text-stone-900">{{ totalLeads }}</span>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-stone-500">Inversión estimada</span>
          <span class="font-bold text-stone-900">
            ${{ estimatedInvestment.toLocaleString('es-CO') }}
          </span>
        </div>
      </div>
    </BaseCard>

    <BaseCard
      title="Flujo del brief"
      subtitle="Secciones principales del diligenciamiento."
    >
      <BriefFlowSteps />
    </BaseCard>
  </aside>
</template>
