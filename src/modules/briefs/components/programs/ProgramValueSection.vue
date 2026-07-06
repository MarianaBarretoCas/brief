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
    title="Propuesta de valor"
    subtitle="Describe el enfoque diferencial y comercial del programa."
  >
    <div class="grid gap-5">
      <BaseTextarea
        v-model="program.valueProposition"
        label="Propuesta de valor"
        placeholder="Describe por qué este programa es relevante para el público objetivo..."
        :rows="4"
      />

      <BaseTextarea
        v-model="program.differentiators"
        label="Diferenciales"
        placeholder="Menciona los diferenciales académicos, metodológicos o institucionales..."
        :rows="4"
      />

      <BaseTextarea
        v-model="program.programObjective"
        label="Objetivo del programa"
        placeholder="Describe el propósito formativo del programa..."
        :rows="4"
      />

      <BaseTextarea
        v-model="program.mainCompetitors"
        label="Competidores principales"
        placeholder="Ej: Universidad X, Universidad Y, Programa Z..."
        :rows="3"
      />
    </div>
  </BaseCard>
</template>
