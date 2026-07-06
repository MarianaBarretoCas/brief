<script setup>
defineProps({
  form: {
    type: Object,
    required: true,
  },
  budgetLineOptions: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <BaseCard
    title="Presupuesto"
    subtitle="Información financiera asociada a la campaña."
  >
    <div class="grid gap-5 md:grid-cols-2">
      <BaseInput
        v-model="form.totalBudget"
        label="Total inversión campaña"
        type="number"
        placeholder="Ej: 12000000"
        required
      />

      <BaseInput
        v-model="form.costCenter"
        label="Centro de costos"
        placeholder="Ej: 123456"
      />

      <BaseInput
        v-model="form.costCenterName"
        label="Nombre centro de costos"
        placeholder="Ej: Facultad de Derecho"
      />

      <BaseSelect
        v-model="form.budgetLine"
        label="Rubro"
        :options="budgetLineOptions"
      />
    </div>
  </BaseCard>
</template>
