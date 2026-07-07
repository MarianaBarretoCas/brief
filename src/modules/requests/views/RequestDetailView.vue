<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useRequestDraftStore } from '../stores/requestDraft.store'
import { useBriefDraftStore } from '../../briefs/stores/briefDraft.store'

const route = useRoute()

const isSent = false  

const requestStore = useRequestDraftStore()
const briefStore = useBriefDraftStore()

const requestForm = requestStore.form
const briefForm = briefStore.generalInfo

const requiresBrief = computed(() => {
  return requestForm.requiresBrief === 'yes'
})

const detailCode = computed(() => {
  if (requiresBrief.value) {
    return briefStore.code || 'BRF-2026-001'
  }

  return route.params.id || requestStore.code || 'SOL-2026-001'
})

const detailTitle = computed(() => {
  return requiresBrief.value ? 'Detalle del brief' : 'Detalle de solicitud'
})

const mainLabel = computed(() => {
  return requiresBrief.value ? 'Campaña' : 'Solicitud'
})

const mainName = computed(() => {
  if (requiresBrief.value) {
    return briefForm.campaignName || requestForm.requestName || 'Sin nombre registrado'
  }

  return requestForm.requestName || 'Sin nombre registrado'
})

const requestTypeLabel = computed(() => {
  return requestForm.requestType || 'No registrado'
})

const previewRoute = computed(() => {
  if (requiresBrief.value) {
    return {
      name: 'brief-preview',
      params: {
        id: detailCode.value,
      },
    }
  }

  return {
    name: 'request-preview',
  }
})

const historyItems = computed(() => {
  if (requiresBrief.value) {
    return [
      '01/07/2026 09:10 - Solicitud creada',
      '01/07/2026 09:20 - Brief creado',
      '01/07/2026 09:35 - Datos generales actualizados',
      '01/07/2026 09:45 - Programas incluidos actualizados',
      '01/07/2026 09:55 - Insumos creativos actualizados',
      '01/07/2026 10:00 - Brief enviado',
    ]
  }

  return [
    '02/07/2026 09:00 - Solicitud creada',
    '02/07/2026 09:08 - Contexto de solicitud registrado',
    '02/07/2026 09:10 - Soportes adjuntados',
    '02/07/2026 09:15 - Solicitud enviada',
  ]
})
</script>

<template>
  <section class="space-y-6">
    <BasePageHeader
      eyebrow="Seguimiento"
      :title="detailTitle"
      description="Consulta el estado, acciones rápidas, ticket relacionado e historial de la solicitud."
    >
      <template #actions>
        <BaseButton
          to="/dashboard"
          variant="secondary"
        >
          Volver al dashboard
        </BaseButton>
      </template>
    </BasePageHeader>

    <BaseCard>
      <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div class="space-y-4">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              {{ detailTitle }}
            </p>

            <h2 class="mt-2 text-2xl font-bold text-stone-900">
              {{ detailCode }}
            </h2>
          </div>

          <div class="space-y-2 text-sm">
            <p>
              <span class="font-bold text-stone-900">{{ mainLabel }}:</span>
              <span class="text-stone-700"> {{ mainName }}</span>
            </p>

            <p v-if="!requiresBrief">
              <span class="font-bold text-stone-900">Tipo:</span>
              <span class="text-stone-700"> {{ requestTypeLabel }}</span>
            </p>

            <p>
              <span class="font-bold text-stone-900">Solicitud:</span>
              <span class="text-stone-700"> {{ requestStore.code }}</span>
            </p>

            <p>
              <span class="font-bold text-stone-900">Requiere brief:</span>
              <span class="text-stone-700"> {{ requiresBrief ? 'Sí' : 'No' }}</span>
            </p>

            <p>
              <span class="font-bold text-stone-900">Estado:</span>
              <BaseBadge variant="submitted">
                Enviado
              </BaseBadge>
            </p>

            <p>
              <span class="font-bold text-stone-900">Ticket Proactivanet:</span>
              <span class="text-stone-700"> Sin relacionar</span>
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 lg:justify-end">
          <BaseButton
            v-if="requiresBrief"
            variant="secondary"
            size="sm"
          >
            Exportar Excel
          </BaseButton>

          <BaseButton
            variant="third"
            size="sm"
          >
            Relacionar ticket
          </BaseButton>
        </div>
      </div>
    </BaseCard>

    <div class="grid gap-6 lg:grid-cols-[1fr_320px]">
      <BaseCard
        title="Historial"
        subtitle="Eventos principales registrados en el flujo."
      >
        <ol class="space-y-3">
          <li
            v-for="item in historyItems"
            :key="item"
            class="flex gap-3 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700"
          >
            <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
              ✓
            </span>

            <span>{{ item }}</span>
          </li>
        </ol>
      </BaseCard>

      <aside class="space-y-4">
        <BaseCard
          title="Resumen"
          subtitle="Información rápida."
        >
          <div class="space-y-4 text-sm">
            <div class="flex items-center justify-between">
              <span class="text-stone-500">Código</span>
              <span class="font-semibold text-stone-900">
                {{ detailCode }}
              </span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-stone-500">Estado</span>
              <BaseBadge variant="submitted">
                Enviado
              </BaseBadge>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-stone-500">Brief</span>
              <span class="font-semibold text-stone-900">
                {{ requiresBrief ? 'Sí' : 'No' }}
              </span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-stone-500">Proactivanet</span>
              <span class="font-semibold text-stone-900">
                Pendiente
              </span>
            </div>
          </div>
        </BaseCard>

        <BaseCard
          title="Acciones"
          subtitle="Opciones disponibles."
        >
          <div class="grid gap-3">
            <BaseButton v-if="isSent === true"
              :to="previewRoute"
              variant="secondary"
            >
              Ver vista previa
            </BaseButton>

            <BaseButton>
              Relacionar ticket
            </BaseButton>

            <BaseButton
              to="/dashboard"
              variant="third"
            >
              Volver al dashboard
            </BaseButton>
          </div>
        </BaseCard>
      </aside>
    </div>
  </section>
</template>
