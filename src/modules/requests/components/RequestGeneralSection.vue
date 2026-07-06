<script setup>
defineProps({
  form: {
    type: Object,
    required: true,
  },
  requestTypeOptions: {
    type: Array,
    required: true,
  },
  areaOptions: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <BaseCard
    title="Datos generales de la solicitud"
    subtitle="Información básica para identificar y clasificar la solicitud."
  >
    <div class="grid gap-5 md:grid-cols-2">
      <BaseInput
        v-model="form.requestName"
        label="Nombre de la solicitud"
        placeholder="Ej: Campaña Filosofía y Derecho"
        required
      />

      <BaseSelect
        v-model="form.requestType"
        label="Tipo de solicitud"
        :options="requestTypeOptions"
        required
      />

      <BaseSelect
        v-model="form.area"
        label="Área / facultad solicitante"
        :options="areaOptions"
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
        label="Correo del solicitante"
        type="email"
        placeholder="usuario@uexternado.edu.co"
        required
      />

      <BaseInput
        v-model="form.requesterPhone"
        label="Teléfono / extensión"
        placeholder="Ej: 1234"
      />
    </div>
  </BaseCard>
</template>
