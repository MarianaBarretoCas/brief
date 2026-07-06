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
    title="Autorización y soportes"
    subtitle="Adjunta la evidencia que respalda la solicitud."
  >
    <div class="grid gap-5 md:grid-cols-2">
      <BaseInput
        v-model="form.authorizerName"
        label="Persona que autoriza"
        placeholder="Nombre de quien aprueba o respalda la solicitud"
      />

      <BaseInput
        v-model="form.authorizerEmail"
        label="Correo de quien autoriza"
        type="email"
        placeholder="correo@uexternado.edu.co"
      />

      <div class="md:col-span-2">
        <BaseTextarea
          v-model="form.authorizationMessage"
          label="Mensaje de autorización"
          placeholder="Copia o resume el mensaje de autorización recibido por correo u otro medio..."
          :rows="4"
          :max-length="1000"
        />
      </div>

      <div class="md:col-span-2">
        <BaseFileUpload
          v-model="form.authorizationSupportFile"
          label="Soporte de autorización"
          description="Adjunta captura del correo, imagen o PDF donde se evidencie la autorización."
          accept="image/*,.pdf"
          :max-size-mb="10"
        />
      </div>

      <div class="md:col-span-2">
        <BaseFileUpload
          v-model="form.budgetSupportFile"
          label="Soporte de presupuesto"
          description="Adjunta imagen, captura o documento que respalde el presupuesto aprobado o disponible."
          accept="image/*,.pdf"
          :max-size-mb="10"
        />
      </div>
    </div>
  </BaseCard>
</template>
