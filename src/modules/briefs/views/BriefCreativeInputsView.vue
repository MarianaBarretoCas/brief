<script setup>
import CreativeCopySection from '../components/creative/CreativeCopySection.vue'
import CreativeVideoSection from '../components/creative/CreativeVideoSection.vue'
import CreativeReferencesSection from '../components/creative/CreativeReferencesSection.vue'
import CreativeSemSection from '../components/creative/CreativeSemSection.vue'
import CreativeInputsAside from '../components/creative/CreativeInputsAside.vue'

import { useBriefDraftStore } from '../stores/briefDraft.store.js'

const draftStore = useBriefDraftStore()

const form = draftStore.creativeInputs
</script>

<template>
  <section class="space-y-6">
    <BasePageHeader
      eyebrow="Insumos creativos"
      title="Insumos para copies, piezas y pauta"
      description="Registra los textos, guiones, referentes visuales y palabras clave que orientarán la producción creativa de la campaña."
    >
      <template #actions>
        <BaseButton
          to="/briefs/BRF-2026-001/programs"
          variant="secondary"
        >
          Volver
        </BaseButton>

        <BaseButton to="/briefs/BRF-2026-001/preview">
          Continuar
        </BaseButton>
      </template>
    </BasePageHeader>

    <div class="grid gap-6 xl:grid-cols-[1fr_340px]">
      <div class="space-y-6">
        <CreativeCopySection :form="form" />

        <CreativeVideoSection :form="form" />

        <CreativeReferencesSection :form="form" />

        <CreativeSemSection :form="form" />

        <div class="flex justify-end gap-3">
          <BaseButton variant="secondary">
            Guardar borrador
          </BaseButton>

          <BaseButton to="/briefs/BRF-2026-001/preview">
            Continuar a vista previa
          </BaseButton>
        </div>
      </div>

      <CreativeInputsAside :form="form" />
    </div>
  </section>
</template>
