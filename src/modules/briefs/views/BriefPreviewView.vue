<script setup>
import { computed } from 'vue'
import { useBriefDraftStore } from '../stores/briefDraft.store.js'

const draftStore = useBriefDraftStore()

const generalInfo = draftStore.generalInfo
const creativeInputs = draftStore.creativeInputs

const selectedServices = computed(() => {
  const services = generalInfo.services || {}

  return [
    services.strategy ? 'Estrategia' : null,
    services.digitalAds ? 'Pautas digitales' : null,
    services.atl ? 'ATL y publicidad exterior' : null,
  ].filter(Boolean)
})

const formatValue = (value) => {
  if (Array.isArray(value)) {
    const filteredValues = value.filter(Boolean)
    return filteredValues.length ? filteredValues.join(', ') : 'No registrado'
  }

  return value || 'No registrado'
}

const formatCurrency = (value) => {
  const number = Number(value || 0)

  if (!number) {
    return 'No registrado'
  }

  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(number)
}

const formatNumber = (value) => {
  const number = Number(value || 0)

  if (!number) {
    return '0'
  }

  return new Intl.NumberFormat('es-CO').format(number)
}

const completionSummary = computed(() => {
  return {
    programs: draftStore.totalPrograms,
    totalLeads: draftStore.totalLeads,
    estimatedInvestment: draftStore.estimatedInvestment,
    graphicTexts: creativeInputs.graphicPieceTexts.filter(Boolean).length,
    captions: creativeInputs.captions.filter(Boolean).length,
    characters: creativeInputs.characterReferences.length,
    graphicSupport: creativeInputs.graphicSupportReferences.length,
    semKeywords: creativeInputs.semKeywords.length,
  }
})
</script>

<template>
  <section class="space-y-6">
    <BasePageHeader
      eyebrow="Vista previa"
      title="Revisión del brief"
      description="Verifica la información registrada antes de enviar el brief para revisión."
    >
      <template #actions>
        <BaseButton
          to="/briefs/BRF-2026-001/creative-inputs"
          variant="secondary"
        >
          Volver
        </BaseButton>

        <BaseButton>
          Enviar brief
        </BaseButton>
      </template>
    </BasePageHeader>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <BaseStatCard
        label="Programas"
        :value="completionSummary.programs"
        helper="Programas incluidos"
      />

      <BaseStatCard
        label="Total leads"
        :value="formatNumber(completionSummary.totalLeads)"
        helper="Suma de leads requeridos"
      />

      <BaseStatCard
        label="Inversión estimada"
        :value="formatCurrency(completionSummary.estimatedInvestment)"
        helper="Con base en costo por lead"
      />

      <BaseStatCard
        label="Palabras clave"
        :value="completionSummary.semKeywords"
        helper="Mínimo sugerido: 20"
      />
    </div>

    <div class="grid gap-6 xl:grid-cols-[1fr_340px]">
      <div class="space-y-6">
        <BaseCard
          title="Datos generales"
          subtitle="Información principal de la solicitud."
        >
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Nombre campaña
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(generalInfo.campaignName) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Facultad / área
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(generalInfo.faculty) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Solicitante
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(generalInfo.requesterName) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Correo
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(generalInfo.requesterEmail) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Teléfono / extensión
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(generalInfo.requesterPhone) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Cargo
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(generalInfo.requesterPosition) }}
              </p>
            </div>
          </div>
        </BaseCard>

        <BaseCard
          title="Servicios y objetivos"
          subtitle="Servicios seleccionados y objetivos de campaña."
        >
          <div class="space-y-5">
            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Servicios requeridos
              </p>

              <div
                v-if="selectedServices.length"
                class="mt-2 flex flex-wrap gap-2"
              >
                <BaseBadge
                  v-for="service in selectedServices"
                  :key="service"
                  variant="validated"
                >
                  {{ service }}
                </BaseBadge>
              </div>

              <p
                v-else
                class="mt-1 text-sm text-stone-500"
              >
                No se seleccionaron servicios.
              </p>
            </div>

            <div class="grid gap-4">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                  Objetivo de la acción táctica
                </p>
                <p class="mt-1 text-sm leading-6 text-stone-700">
                  {{ formatValue(generalInfo.tacticalObjective) }}
                </p>
              </div>

              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                  Objetivo de pauta
                </p>
                <p class="mt-1 text-sm leading-6 text-stone-700">
                  {{ formatValue(generalInfo.adsObjective) }}
                </p>
              </div>
            </div>
          </div>
        </BaseCard>

        <BaseCard
          title="Presupuesto y fechas"
          subtitle="Información financiera y periodo de activación."
        >
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Total inversión campaña
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatCurrency(generalInfo.totalBudget) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Centro de costos
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(generalInfo.costCenter) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Rubro
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(generalInfo.budgetLine) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Fechas de activación
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(generalInfo.startDate) }} — {{ formatValue(generalInfo.endDate) }}
              </p>
            </div>
          </div>
        </BaseCard>

        <BaseCard
          title="Programas incluidos"
          subtitle="Matriz de información de programas."
        >
          <div class="space-y-4">
            <article
              v-for="(program, index) in draftStore.programs"
              :key="program.localId"
              class="rounded-xl border border-stone-200 bg-stone-50 p-4"
            >
              <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    Programa {{ index + 1 }}
                  </p>

                  <h3 class="mt-1 text-base font-bold text-stone-900">
                    {{ formatValue(program.programName) }}
                  </h3>
                </div>

                <BaseBadge variant="draft">
                  Registrado
                </BaseBadge>
              </div>

              <div class="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                    SNIES
                  </p>
                  <p class="mt-1 text-sm text-stone-700">
                    {{ formatValue(program.snies) }}
                  </p>
                </div>

                <div>
                  <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                    Leads requeridos
                  </p>
                  <p class="mt-1 text-sm text-stone-700">
                    {{ formatNumber(program.requiredLeads) }}
                  </p>
                </div>

                <div>
                  <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                    Costo por lead anterior
                  </p>
                  <p class="mt-1 text-sm text-stone-700">
                    {{ formatCurrency(program.previousLeadCost) }}
                  </p>
                </div>

                <div>
                  <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                    Meta matriculados
                  </p>
                  <p class="mt-1 text-sm text-stone-700">
                    {{ formatNumber(program.enrollmentGoal) }}
                  </p>
                </div>
              </div>

              <div class="mt-4">
                <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                  Propuesta de valor
                </p>
                <p class="mt-1 text-sm leading-6 text-stone-700">
                  {{ formatValue(program.valueProposition) }}
                </p>
              </div>
            </article>
          </div>
        </BaseCard>

        <BaseCard
          title="Insumos creativos"
          subtitle="Textos, guion, referentes visuales y palabras clave."
        >
          <div class="space-y-6">
            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Especificaciones para copy
              </p>
              <p class="mt-1 text-sm leading-6 text-stone-700">
                {{ formatValue(creativeInputs.copySpecifications) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Texto que va dentro de la pieza gráfica
              </p>

              <ul class="mt-2 space-y-2">
                <li
                  v-for="(text, index) in creativeInputs.graphicPieceTexts"
                  :key="index"
                  class="rounded-lg bg-stone-50 px-4 py-3 text-sm text-stone-700"
                >
                  {{ text || 'No registrado' }}
                  <span class="ml-2 text-xs text-stone-400">
                    {{ String(text || '').length }} / 90
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Captions
              </p>

              <ul class="mt-2 space-y-2">
                <li
                  v-for="(caption, index) in creativeInputs.captions"
                  :key="index"
                  class="rounded-lg bg-stone-50 px-4 py-3 text-sm text-stone-700"
                >
                  {{ caption || 'No registrado' }}
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Guion para video o reel
              </p>
              <p class="mt-1 text-sm leading-6 text-stone-700">
                {{ formatValue(creativeInputs.videoScript) }}
              </p>
              <p class="mt-1 text-xs text-stone-500">
                {{ String(creativeInputs.videoScript || '').length }} / 1000 caracteres
              </p>
            </div>
          </div>
        </BaseCard>

        <BaseCard
          title="SEM y palabras clave"
          subtitle="Términos registrados para pauta de búsqueda."
        >
          <div
            v-if="creativeInputs.semKeywords.length"
            class="flex flex-wrap gap-2"
          >
            <BaseBadge
              v-for="keyword in creativeInputs.semKeywords"
              :key="keyword"
              variant="default"
            >
              {{ keyword }}
            </BaseBadge>
          </div>

          <BaseEmptyState
            v-else
            title="Sin palabras clave registradas"
            description="Aún no se han agregado palabras clave SEM."
          />
        </BaseCard>
      </div>

      <aside class="space-y-4">
        <BaseCard
          title="Estado de revisión"
          subtitle="Resumen antes de enviar."
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
              <span class="font-semibold text-stone-900">
                {{ draftStore.code }}
              </span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-stone-500">Programas</span>
              <span class="font-semibold text-stone-900">
                {{ completionSummary.programs }}
              </span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-stone-500">Palabras clave</span>
              <span class="font-semibold text-stone-900">
                {{ completionSummary.semKeywords }} / 20
              </span>
            </div>
          </div>
        </BaseCard>

        <BaseCard
          title="Acciones"
          subtitle="Opciones disponibles para este brief."
        >
          <div class="grid gap-3">
            <BaseButton variant="completing">
              Guardar borrador
            </BaseButton>

            <BaseButton>
              Enviar brief
            </BaseButton>

            <BaseButton
              to="/briefs/BRF-2026-001/creative-inputs"
              variant="third"
            >
              Volver a editar
            </BaseButton>
          </div>
        </BaseCard>
      </aside>
    </div>
  </section>
</template>
