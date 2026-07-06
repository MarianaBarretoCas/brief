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
    title="SEM y palabras clave"
    subtitle="Términos sugeridos para campañas de búsqueda y pauta digital."
  >
    <BaseTagInput
      v-model="form.semKeywords"
      label="Palabras clave"
      description="Incluya mínimo 20 términos que su público objetivo podría usar al buscar este programa en Google."
      placeholder="Ej: maestría derecho"
      :min-items="20"
    >
      <template #help>
        <p class="font-semibold">
          Recomendación para diligenciar este campo:
        </p>

        <p class="mt-1">
          Piensa en frases específicas relacionadas con el contenido, perfil profesional,
          necesidades del mercado o beneficios del programa.
        </p>

        <p class="mt-2">
          Ejemplo: compliance specialist, compliance officers online,
          maestría en derecho, posgrado derecho, teoría jurídica.
        </p>

        <p class="mt-2">
          Evita términos demasiado genéricos como: contaduría, especialización,
          posgrado o derecho.
        </p>
      </template>
    </BaseTagInput>
  </BaseCard>
</template>
