<script setup>
const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
})

if (!props.form.authorization) {
  props.form.authorization = {
    authorizerName: '',
    authorizerEmail: '',
    authorizationMessage: '',
    authorizationSupportFile: null,
  }
}

const authorization = props.form.authorization
</script>

<template>
  <BaseCard
    title="Autorización y soportes"
    subtitle="Registra la evidencia que respalda la solicitud del brief."
  >
    <div class="grid gap-5 md:grid-cols-2">
      <BaseInput
        v-model="authorization.authorizerName"
        label="Persona que autoriza"
        placeholder="Nombre de la persona que aprueba o respalda la solicitud"
      />

      <BaseInput
        v-model="authorization.authorizerEmail"
        label="Correo de quien autoriza"
        type="email"
        placeholder="correo@uexternado.edu.co"
      />

      <div class="md:col-span-2">
        <BaseTextarea
          v-model="authorization.authorizationMessage"
          label="Mensaje o contexto de autorización"
          placeholder="Escribe el mensaje que antes se enviaba en el cuerpo del correo o explica el soporte adjunto..."
          :rows="4"
          :max-length="1000"
        />
      </div>

      <div class="md:col-span-2">
        <BaseFileUpload
          v-model="authorization.authorizationSupportFile"
          label="Soporte de autorización"
          description="Adjunta captura del correo, imagen o PDF donde se evidencie la autorización de la solicitud."
          accept="image/*,.pdf"
          :max-size-mb="10"
        />
      </div>
    </div>
  </BaseCard>
</template>
