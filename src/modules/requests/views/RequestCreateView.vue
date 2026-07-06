<script setup>
import { computed } from 'vue'

import {
  areaOptions,
  requestTypeOptions,
} from '../data/requestCreate.config'

import { useRequestDraftStore } from '../stores/requestDraft.store'

import RequestGeneralSection from '../components/RequestGeneralSection.vue'
import RequestBriefDecisionSection from '../components/RequestBriefDecisionSection.vue'
import RequestContextSection from '../components/RequestContextSection.vue'
import RequestAuthorizationSection from '../components/RequestAuthorizationSection.vue'
import RequestStatusAside from '../components/RequestStatusAside.vue'

const requestStore = useRequestDraftStore()

const form = requestStore.form

const nextRoute = computed(() => {
  return form.requiresBrief === 'yes'
    ? '/briefs/create'
    : '/requests/preview'
})

const nextLabel = computed(() => {
  return form.requiresBrief === 'yes'
    ? 'Continuar a brief'
    : 'Revisar solicitud'
})
</script>

<template>
  <section class="space-y-6">
    <BasePageHeader
      eyebrow="Nueva solicitud"
      title="Crear solicitud"
      description="Registra la información inicial, soportes y define si esta solicitud requiere diligenciar un brief completo."
    >
      <template #actions>
        <BaseButton variant="completing">
          Guardar borrador
        </BaseButton>

        <BaseButton :to="nextRoute">
          {{ nextLabel }}
        </BaseButton>
      </template>
    </BasePageHeader>

    <div class="grid gap-6 xl:grid-cols-[1fr_320px]">
      <div class="space-y-6">
        <RequestGeneralSection
          :form="form"
          :request-type-options="requestTypeOptions"
          :area-options="areaOptions"
        />

        <RequestBriefDecisionSection :form="form" />

        <RequestContextSection :form="form" />

        <RequestAuthorizationSection :form="form" />

        <div class="flex justify-end gap-3">
          <BaseButton variant="completing">
            Guardar borrador
          </BaseButton>

          <BaseButton :to="nextRoute">
            {{ nextLabel }}
          </BaseButton>
        </div>
      </div>

      <RequestStatusAside
        :form="form"
        :code="requestStore.code"
      />
    </div>
  </section>
</template>
