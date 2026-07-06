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
    title="Contexto de la solicitud"
    subtitle="Registra el mensaje o explicación que antes se enviaba en el cuerpo del correo."
  >
    <BaseTextarea
      v-model="form.requestContext"
      label="Mensaje o contexto"
      placeholder="Describe qué se solicita, antecedentes, instrucciones o información relevante para atender la solicitud..."
      :rows="5"
      :max-length="1200"
    />
  </BaseCard>
</template>
