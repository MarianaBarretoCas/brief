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
    title="Copies sugeridos"
    subtitle="Textos base para piezas gráficas y publicaciones."
  >
    <div class="space-y-6">
      <BaseTextarea
        v-model="form.copySpecifications"
        label="Especificaciones para copy"
        placeholder="Describe tono, enfoque, mensajes clave o restricciones de comunicación..."
        :rows="4"
        :max-length="700"
      />

      <BaseRepeater
        v-model="form.graphicPieceTexts"
        label="Texto que va dentro de la pieza gráfica"
        description="Incluya mínimo 2 opciones de texto. Evite frases o palabras cliché. Priorice una idea clave, utilice palabras de impacto o acción y asegúrese de que el texto sea claro y legible en pantallas pequeñas."
        placeholder="Escribe una opción de texto para la pieza gráfica..."
        add-text="Agregar opción"
        :min-items="2"
        :max-length="90"
        :rows="3"
      />

      <BaseRepeater
        v-model="form.captions"
        label="Captions"
        description="Incluya mínimo 3 opciones de caption para publicaciones."
        placeholder="Escribe un caption..."
        add-text="Agregar caption"
        :min-items="3"
        :rows="3"
      />
    </div>
  </BaseCard>
</template>
