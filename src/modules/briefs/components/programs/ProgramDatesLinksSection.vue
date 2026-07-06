<script setup>
defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <BaseCard
    title="Fechas y enlaces"
    subtitle="Información de instalación, clases y enlaces oficiales del programa."
  >
    <div class="grid gap-5 md:grid-cols-3">
      <BaseInput
        v-model="program.installStartDate"
        label="Fecha inicio instalación"
        type="date"
      />

      <BaseInput
        v-model="program.installEndDate"
        label="Fecha fin instalación"
        type="date"
      />

      <BaseInput
        v-model="program.classStartDate"
        label="Fecha inicio clases"
        type="date"
      />
    </div>

    <div class="mt-5 grid gap-5">
      <BaseInput
        v-model="program.programUrl"
        label="URL del programa"
        type="url"
        placeholder="https://www.uexternado.edu.co/..."
      />

      <div class="rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <p class="text-sm font-bold text-amber-800">
          Campos internos no diligenciables por el solicitante
        </p>

        <p class="mt-1 text-sm leading-6 text-amber-700">
          Los campos URL landing y plantillas de automatización/flujos serán gestionados internamente por el equipo correspondiente.
        </p>
      </div>
    </div>
  </BaseCard>
</template>
