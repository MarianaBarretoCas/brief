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
    title="Objetivos y resultado esperado"
    subtitle="Define qué se espera lograr con la campaña."
  >
    <div class="grid gap-5">
      <BaseTextarea
        v-model="form.tacticalObjective"
        label="Objetivo de la acción táctica"
        placeholder="Describe el propósito principal de la campaña..."
        required
      />

      <BaseTextarea
        v-model="form.adsObjective"
        label="Objetivo de pauta"
        placeholder="Describe qué se espera lograr con la pauta..."
      />

      <div class="grid gap-5 md:grid-cols-3">
        <BaseInput
          v-model="form.enrollmentGoal"
          label="Meta matriculados"
          type="number"
          placeholder="Ej: 20"
        />

        <BaseInput
          v-model="form.registrationGoal"
          label="Meta inscritos"
          type="number"
          placeholder="Ej: 80"
        />

        <BaseInput
          v-model="form.leadsGoal"
          label="Meta leads"
          type="number"
          placeholder="Ej: 500"
        />
      </div>
    </div>
  </BaseCard>
</template>
