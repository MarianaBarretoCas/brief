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
    title="Servicios requeridos"
    subtitle="Selecciona los servicios que aplican para esta solicitud."
  >
    <div class="grid gap-4 md:grid-cols-3">
      <BaseCheckbox
        v-model="form.services.strategy"
        label="Estrategia"
        description="Planeación, enfoque táctico o definición de campaña."
      />

      <BaseCheckbox
        v-model="form.services.digitalAds"
        label="Pautas digitales"
        description="Campañas pagas en medios digitales."
      />

      <BaseCheckbox
        v-model="form.services.atl"
        label="ATL y publicidad exterior"
        description="Medios físicos, exteriores o publicidad tradicional."
      />
    </div>

    <div class="mt-6 grid gap-5">
      <BaseTextarea
        v-if="form.services.strategy"
        v-model="form.strategyReason"
        label="Razón o necesidad de estrategia"
        placeholder="Describe por qué se requiere apoyo estratégico..."
        :rows="4"
      />

      <BaseTextarea
        v-if="form.services.digitalAds"
        v-model="form.digitalAdsReason"
        label="Razón o necesidad de pautas digitales"
        placeholder="Describe el objetivo de la pauta, plataformas esperadas o público objetivo..."
        :rows="4"
      />

      <BaseTextarea
        v-if="form.services.atl"
        v-model="form.atlReason"
        label="Razón o necesidad de ATL / publicidad exterior"
        placeholder="Describe el tipo de medio, ubicación o alcance esperado..."
        :rows="4"
      />
    </div>
  </BaseCard>
</template>
