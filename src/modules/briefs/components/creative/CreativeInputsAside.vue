<script setup>
import BriefFlowSteps from '../BriefFlowSteps.vue'

defineProps({
  form: {
    type: Object,
    required: true,
  },
})

const getCompletedStatus = (items, required) => {
  return `${items.length} / ${required}`
}
</script>

<template>
  <aside class="space-y-4">
    <BaseCard
      title="Estado de insumos"
      subtitle="Resumen preliminar de esta sección."
    >
      <div class="space-y-4 text-sm">
        <div class="flex items-center justify-between">
          <span class="text-stone-500">Estado</span>

          <BaseBadge variant="draft">
            En edición
          </BaseBadge>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-stone-500">Textos pieza gráfica</span>
          <span class="font-semibold text-stone-900">
            {{ getCompletedStatus(form.graphicPieceTexts.filter(Boolean), 2) }}
          </span>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-stone-500">Captions</span>
          <span class="font-semibold text-stone-900">
            {{ getCompletedStatus(form.captions.filter(Boolean), 3) }}
          </span>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-stone-500">Personajes</span>
          <span class="font-semibold text-stone-900">
            {{ getCompletedStatus(form.characterReferences, 5) }}
          </span>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-stone-500">Elementos gráficos</span>
          <span class="font-semibold text-stone-900">
            {{ getCompletedStatus(form.graphicSupportReferences, 5) }}
          </span>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-stone-500">Palabras clave</span>
          <span class="font-semibold text-stone-900">
            {{ getCompletedStatus(form.semKeywords, 20) }}
          </span>
        </div>
      </div>
    </BaseCard>

    <BaseCard
      title="Recomendación"
      subtitle="Buenas prácticas para completar esta sección."
    >
      <p class="text-sm leading-6 text-stone-600">
        Registra ejemplos claros, enlaces de referencia y palabras clave suficientes.
        Los contadores son automáticos y sirven para evitar errores antes de enviar el brief.
      </p>
    </BaseCard>

    <BaseCard
      title="Flujo del brief"
      subtitle="Secciones principales del diligenciamiento."
    >
      <BriefFlowSteps />
    </BaseCard>
  </aside>
</template>
