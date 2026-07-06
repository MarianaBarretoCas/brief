<script setup>
import BriefFlowSteps from '../BriefFlowSteps.vue'
</script>

<template>
  <aside class="space-y-4">
    <BaseCard
      title="Estado del brief"
      subtitle="Resumen de avance de la solicitud."
    >
      <div class="space-y-4 text-sm">
        <div class="flex items-center justify-between">
          <span class="text-stone-500">Estado</span>

          <BaseBadge variant="draft">
            Borrador
          </BaseBadge>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-stone-500">Código</span>
          <span class="font-semibold text-stone-900">BRF-2026-001</span>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-stone-500">Sección actual</span>
          <span class="font-semibold text-stone-900">Datos generales</span>
        </div>
      </div>
    </BaseCard>

    <BaseCard
      title="Flujo del brief"
      subtitle="Secciones principales del diligenciamiento."
    >
      <BriefFlowSteps />
    </BaseCard>
  </aside>
</template>
