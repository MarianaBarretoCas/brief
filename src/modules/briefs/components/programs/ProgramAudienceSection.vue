<script setup>
defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <BaseCard
    title="Público objetivo"
    subtitle="Información para segmentación, pauta y mensajes de campaña."
  >
    <div class="grid gap-5 md:grid-cols-2">
      <BaseTextarea
        v-model="program.cities"
        label="Ciudades"
        placeholder="Ej: Bogotá, Medellín, Cali..."
        :rows="3"
      />

      <BaseInput
        v-model="program.ageRange"
        label="Edad"
        placeholder="Ej: 25 a 45 años"
      />

      <BaseTextarea
        v-model="program.positions"
        label="Cargos"
        placeholder="Ej: Abogados, coordinadores jurídicos, consultores..."
        :rows="3"
      />

      <BaseTextarea
        v-model="program.professions"
        label="Profesiones"
        placeholder="Ej: Derecho, Ciencia Política, Filosofía..."
        :rows="3"
      />

      <BaseTextarea
        v-model="program.interests"
        label="Temáticas de interés"
        placeholder="Ej: Teoría jurídica, filosofía del derecho, investigación..."
        :rows="3"
      />

      <BaseTextarea
        v-model="program.graduateUniversities"
        label="Universidades de egreso"
        placeholder="Ej: Externado, Nacional, Javeriana..."
        :rows="3"
      />

      <BaseTextarea
        v-model="program.organizations"
        label="Organizaciones / asociaciones"
        placeholder="Ej: Colegios de abogados, asociaciones profesionales..."
        :rows="3"
      />
    </div>
  </BaseCard>
</template>
