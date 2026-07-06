<script setup>
import { onMounted, ref } from 'vue'

import BriefGeneralInfoSection from '../components/create/BriefGeneralInfoSection.vue'
import BriefServicesSection from '../components/create/BriefServicesSection.vue'
import BriefObjectivesSection from '../components/create/BriefObjectivesSection.vue'
import BriefBudgetSection from '../components/create/BriefBudgetSection.vue'
import BriefActivationDatesSection from '../components/create/BriefActivationDatesSection.vue'
import BriefFormStatusAside from '../components/create/BriefFormStatusAside.vue'

import { catalogService } from '../services/catalog.service'
import { useBriefDraftStore } from '../stores/briefDraft.store'

const draftStore = useBriefDraftStore()

const form = draftStore.generalInfo

const facultyOptions = ref([])
const budgetLineOptions = ref([])
const isCatalogLoading = ref(false)

const loadCatalogs = async () => {
  isCatalogLoading.value = true

  try {
    const catalogs = await catalogService.getBriefCreateCatalogs()

    facultyOptions.value = catalogs.faculties
    budgetLineOptions.value = catalogs.budgetLines
  } finally {
    isCatalogLoading.value = false
  }
}

onMounted(() => {
  loadCatalogs()
})
</script>

<template>
  <section class="space-y-6">
    <BasePageHeader
      eyebrow="Brief"
      title="Crear brief institucional"
      description="Diligencia la información específica del brief. Esta sección aplica cuando la solicitud requiere una matriz completa."
    >
      <template #actions>
        <BaseButton
          to="/requests/create"
          variant="secondary"
        >
          Volver a solicitud
        </BaseButton>

        <BaseButton to="/briefs/BRF-2026-001/programs">
          Continuar
        </BaseButton>
      </template>
    </BasePageHeader>

    <div class="grid gap-6 xl:grid-cols-[1fr_320px]">
      <div class="space-y-6">
        <BriefGeneralInfoSection
          :form="form"
          :faculty-options="facultyOptions"
        />

        <BriefServicesSection :form="form" />

        <BriefObjectivesSection :form="form" />

        <BriefBudgetSection
          :form="form"
          :budget-line-options="budgetLineOptions"
        />

        <BriefActivationDatesSection :form="form" />

        <div class="flex justify-end gap-3">
          <BaseButton variant="completing">
            Guardar borrador
          </BaseButton>

          <BaseButton to="/briefs/BRF-2026-001/programs">
            Continuar a programas
          </BaseButton>
        </div>
      </div>

      <BriefFormStatusAside />
    </div>
  </section>
</template>
