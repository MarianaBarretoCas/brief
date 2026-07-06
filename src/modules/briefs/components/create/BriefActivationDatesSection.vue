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
    title="Fechas de activación"
    subtitle="Periodo estimado en el que estará activa la campaña."
  >
    <div class="grid gap-5 md:grid-cols-2">
      <BaseInput
        v-model="form.startDate"
        label="Desde"
        type="date"
        required
      />

      <BaseInput
        v-model="form.endDate"
        label="Hasta"
        type="date"
        required
      />
    </div>
  </BaseCard>
</template>
