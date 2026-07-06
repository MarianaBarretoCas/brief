<script setup>
defineProps({
  form: {
    type: Object,
    required: true,
  },
  facultyOptions: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <BaseCard
    title="Datos generales"
    subtitle="Información principal de la campaña y del solicitante."
  >
    <div class="grid gap-5 md:grid-cols-2">
      <BaseInput
        v-model="form.campaignName"
        label="Nombre de la campaña"
        placeholder="Ej: Filosofía y Derecho"
        required
      />

      <BaseSelect
        v-model="form.faculty"
        label="Facultad / área solicitante"
        :options="facultyOptions"
        required
      />

      <BaseInput
        v-model="form.requesterName"
        label="Nombre del solicitante"
        placeholder="Nombre completo"
        required
      />

      <BaseInput
        v-model="form.requesterEmail"
        label="Correo solicitante"
        type="email"
        placeholder="usuario@uexternado.edu.co"
        required
      />

      <BaseInput
        v-model="form.requesterPhone"
        label="Teléfono / extensión"
        placeholder="Ej: 1234"
      />

      <BaseInput
        v-model="form.requesterPosition"
        label="Cargo solicitante"
        placeholder="Ej: Profesional de mercadeo"
      />

      <BaseInput
        v-model="form.requestDate"
        label="Fecha de solicitud"
        type="date"
        required
      />
    </div>
  </BaseCard>
</template>
