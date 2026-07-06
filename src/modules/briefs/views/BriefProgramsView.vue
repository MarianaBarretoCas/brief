<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'

import ProgramBasicInfoSection from '../components/programs/ProgramBasicInfoSection.vue'
import ProgramDatesLinksSection from '../components/programs/ProgramDatesLinksSection.vue'
import ProgramValueSection from '../components/programs/ProgramValueSection.vue'
import ProgramAudienceSection from '../components/programs/ProgramAudienceSection.vue'
import ProgramsSidebar from '../components/programs/ProgramsSidebar.vue'

import { useBriefDraftStore } from '../stores/briefDraft.store.js'

const draftStore = useBriefDraftStore()

const {
  programs,
  totalLeads,
  estimatedInvestment,
} = storeToRefs(draftStore)

const activeProgramIndex = ref(0)

const activeProgram = computed(() => {
  return programs.value[activeProgramIndex.value]
})

const selectProgram = (index) => {
  activeProgramIndex.value = index
}

const addProgram = () => {
  draftStore.addProgram()
  activeProgramIndex.value = programs.value.length - 1
}

const removeProgram = (index) => {
  draftStore.removeProgram(index)

  if (activeProgramIndex.value >= programs.value.length) {
    activeProgramIndex.value = programs.value.length - 1
  }
}
</script>

<template>
  <section class="space-y-6">
    <BasePageHeader
      eyebrow="Programas incluidos"
      title="Matriz de información de programas"
      description="Registra la información académica, comercial y de segmentación de cada programa incluido en la campaña."
    >
      <template #actions>
        <BaseButton to="/briefs/create" variant="secondary">
          Volver
        </BaseButton>

        <BaseButton to="/briefs/BRF-2026-001/creative-inputs">
          Continuar
        </BaseButton>
      </template>
    </BasePageHeader>

    <div class="grid gap-6 xl:grid-cols-[1fr_340px]">
      <div v-if="activeProgram" class="space-y-6">
        <BaseCard>
          <div
            class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700"
              >
                Programa activo
              </p>

              <h2 class="mt-1 text-xl font-bold text-stone-900">
                Programa {{ activeProgramIndex + 1 }}
              </h2>

              <p class="mt-1 text-sm text-stone-500">
                {{
                  activeProgram.programName ||
                  "Completa la información del programa seleccionado."
                }}
              </p>
            </div>

            <BaseBadge variant="draft"> En edición </BaseBadge>
          </div>
        </BaseCard>

        <ProgramBasicInfoSection :program="activeProgram" />

        <ProgramDatesLinksSection :program="activeProgram" />

        <ProgramValueSection :program="activeProgram" />

        <ProgramAudienceSection :program="activeProgram" />

        <div class="flex justify-end gap-3">
          <BaseButton variant="completing"> Guardar borrador </BaseButton>

          <BaseButton to="/briefs/BRF-2026-001/creative-inputs">
            Continuar a insumos
          </BaseButton>
        </div>
      </div>

      <ProgramsSidebar
        :programs="programs"
        :active-index="activeProgramIndex"
        :total-leads="totalLeads"
        :estimated-investment="estimatedInvestment"
        @select="selectProgram"
        @add="addProgram"
        @remove="removeProgram"
      />
    </div>
  </section>
</template>
