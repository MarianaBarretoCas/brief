<script setup>
defineProps({
  form: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <BaseCard
    title="Tipo de flujo"
    subtitle="Indica si esta solicitud requiere diligenciar un brief completo."
  >
    <div class="grid gap-4 md:grid-cols-2">
      <button
        type="button"
        :class="[
          'rounded-2xl border p-5 text-left transition',
          form.requiresBrief === 'yes'
            ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50',
        ]"
        @click="form.requiresBrief = 'yes'"
      >
        <p class="text-sm font-bold">
          Sí requiere brief
        </p>

        <p class="mt-2 text-xs leading-5">
          Para campañas, programas, pauta, piezas con matriz completa o solicitudes que necesitan información detallada.
        </p>
      </button>

      <button
        type="button"
        :class="[
          'rounded-2xl border p-5 text-left transition',
          form.requiresBrief === 'no'
            ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50',
        ]"
        @click="form.requiresBrief = 'no'"
      >
        <p class="text-sm font-bold">
          No requiere brief
        </p>

        <p class="mt-2 text-xs leading-5">
          Para solicitudes puntuales que solo necesitan contexto, autorización, presupuesto o adjuntos.
        </p>
      </button>
    </div>
  </BaseCard>
</template>
