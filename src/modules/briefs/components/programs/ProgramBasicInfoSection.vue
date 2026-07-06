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
    title="Información del programa"
    subtitle="Datos principales del programa académico incluido en la campaña."
  >
    <div class="grid gap-5 md:grid-cols-2">
      <BaseInput
        v-model="program.programName"
        label="Nombre del programa"
        placeholder="Ej: Maestría en Teoría Jurídica y Filosofía del Derecho"
        required
      />

      <BaseInput
        v-model="program.snies"
        label="Código SNIES"
        placeholder="Ej: 123456"
      />

      <BaseInput
        v-model="program.menResolution"
        label="Resolución MEN"
        placeholder="Ej: Resolución 0000 de 2026"
      />

      <BaseInput
        v-model="program.requiredLeads"
        label="Cantidad de leads necesarios"
        type="number"
        placeholder="Ej: 500"
      />

      <BaseInput
        v-model="program.previousLeadCost"
        label="Costo por lead anterior"
        type="number"
        placeholder="Ej: 25000"
      />

      <BaseInput
        v-model="program.enrollmentGoal"
        label="Meta de matriculados"
        type="number"
        placeholder="Ej: 20"
      />
    </div>
  </BaseCard>
</template>
