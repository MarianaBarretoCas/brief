<script setup>
import { computed, ref } from 'vue'

const searchTerm = ref('')
const selectedStatus = ref('Todos')
const selectedBriefFilter = ref('Todos')

const requests = ref([
  {
    id: 'SOL-2026-001',
    code: 'SOL-2026-001',
    name: 'Campaña Filosofía y Derecho',
    type: 'Campaña',
    requiresBrief: true,
    status: 'draft',
    statusLabel: 'Borrador',
    updatedAt: '03/07/2026 04:20 p. m.',
    primaryActionLabel: 'Consultar',
    primaryActionRoute: 'requests/SOL-2026-001/detail',
  },
  {
    id: 'SOL-2026-002',
    code: 'SOL-2026-002',
    name: 'Ajuste de pieza gráfica institucional',
    type: 'Pieza gráfica',
    requiresBrief: false,
    status: 'submitted',
    statusLabel: 'Enviada',
    updatedAt: '02/07/2026 09:15 a. m.',
    primaryActionLabel: 'Consultar',
    primaryActionRoute: 'requests/SOL-2026-002/detail',
  },
  {
    id: 'SOL-2026-003',
    code: 'SOL-2026-003',
    name: 'Campaña Posgrados 2026',
    type: 'Pauta digital',
    requiresBrief: true,
    status: 'submitted',
    statusLabel: 'En revisión',
    updatedAt: '01/07/2026 02:45 p. m.',
    primaryActionLabel: 'Consultar',
    primaryActionRoute: 'requests/SOL-2026-003/detail',
  },
  {
    id: 'SOL-2026-004',
    code: 'SOL-2026-004',
    name: 'Solicitud de actualización web',
    type: 'Actualización de información',
    requiresBrief: false,
    status: 'returned',
    statusLabel: 'Devuelta',
    updatedAt: '30/06/2026 11:10 a. m.',
    primaryActionLabel: 'Consultar',
    primaryActionRoute: 'requests/SOL-2026-004/detail',
  },
])

const statusOptions = [
  'Todos',
  'Borrador',
  'Enviada',
  'En revisión',
  'Devuelta',
]

const briefOptions = [
  'Todos',
  'Requiere brief',
  'No requiere brief',
]

const statusVariants = {
  draft: 'draft',
  submitted: 'submitted',
  returned: 'returned',
  closed: 'closed',
}

const filteredRequests = computed(() => {
  return requests.value.filter((request) => {
    const normalizedSearch = searchTerm.value.toLowerCase()

    const matchesSearch =
      request.code.toLowerCase().includes(normalizedSearch) ||
      request.name.toLowerCase().includes(normalizedSearch) ||
      request.type.toLowerCase().includes(normalizedSearch)

    const matchesStatus =
      selectedStatus.value === 'Todos' ||
      request.statusLabel === selectedStatus.value

    const matchesBriefFilter =
      selectedBriefFilter.value === 'Todos' ||
      (selectedBriefFilter.value === 'Requiere brief' && request.requiresBrief) ||
      (selectedBriefFilter.value === 'No requiere brief' && !request.requiresBrief)

    return matchesSearch && matchesStatus && matchesBriefFilter
  })
})

const stats = computed(() => {
  const total = requests.value.length
  const drafts = requests.value.filter((request) => request.status === 'draft').length
  const withBrief = requests.value.filter((request) => request.requiresBrief).length
  const withoutBrief = requests.value.filter((request) => !request.requiresBrief).length

  return {
    total,
    drafts,
    withBrief,
    withoutBrief,
  }
})
</script>

<template>
  <section class="space-y-6">
    <BasePageHeader
      eyebrow="Gestión de solicitudes"
      title="Mis solicitudes"
      description="Consulta, crea y administra las solicitudes registradas. Algunas solicitudes requieren brief completo y otras solo necesitan contexto, autorización y soportes."
    >
      <template #actions>
        <BaseButton to="/requests/create">
          + Nueva solicitud
        </BaseButton>
      </template>
    </BasePageHeader>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <BaseStatCard
        label="Total"
        :value="stats.total"
        helper="Solicitudes registradas"
      />

      <BaseStatCard
        label="Borradores"
        :value="stats.drafts"
        helper="Pendientes por completar"
      />

      <BaseStatCard
        label="Con brief"
        :value="stats.withBrief"
        helper="Requieren matriz completa"
      />

      <BaseStatCard
        label="Sin brief"
        :value="stats.withoutBrief"
        helper="Solicitudes puntuales"
      />
    </div>

    <BaseTable
      title="Solicitudes registradas"
      description="Listado general de solicitudes creadas por el usuario."
    >
      <template #toolbar>
        <div class="grid gap-4 xl:grid-cols-[1fr_220px_220px]">
          <BaseInput
            v-model="searchTerm"
            placeholder="Buscar por código, nombre o tipo..."
          />

          <BaseSelect
            v-model="selectedStatus"
            :options="statusOptions"
          />

          <BaseSelect
            v-model="selectedBriefFilter"
            :options="briefOptions"
          />
        </div>
      </template>

      <thead class="bg-stone-50 text-center text-xs uppercase tracking-wide text-stone-500">
        <tr>
          <th class="px-4 py-3">
            Código
          </th>

          <th class="px-4 py-3">
            Solicitud
          </th>

          <th class="px-4 py-3">
            Tipo
          </th>

          <th class="px-4 py-3">
            Brief
          </th>

          <th class="px-4 py-3">
            Estado
          </th>

          <th class="px-4 py-3">
            Última edición
          </th>

          <th class="w-[320px] px-4 py-3">
            Acciones
          </th>
        </tr>
      </thead>

      <tbody class="divide-y divide-stone-100 text-center">
        <tr
          v-for="request in filteredRequests"
          :key="request.id"
          class="transition hover:bg-stone-50"
        >
          <td class="px-4 py-4 font-medium text-stone-900">
            {{ request.code }}
          </td>

          <td class="px-4 py-4">
            <p class="font-semibold text-stone-900">
              {{ request.name }}
            </p>

            <p class="mt-1 text-xs text-stone-500">
              {{ request.requiresBrief ? 'Flujo con brief completo' : 'Solicitud puntual sin brief' }}
            </p>
          </td>

          <td class="px-4 py-4 text-stone-700">
            {{ request.type }}
          </td>

          <td class="px-4 py-4">
            <BaseBadge :variant="request.requiresBrief ? 'validated' : 'default'">
              {{ request.requiresBrief ? 'Sí' : 'No' }}
            </BaseBadge>
          </td>

          <td class="px-4 py-4">
            <BaseBadge :variant="statusVariants[request.status] || 'default'">
              {{ request.statusLabel }}
            </BaseBadge>
          </td>

          <td class="px-4 py-4 text-stone-500">
            {{ request.updatedAt }}
          </td>

          <td class="px-4 py-4">
            <div class="flex justify-center gap-2">
              <BaseButton
                :to="request.primaryActionRoute"
                variant="secondary"
                size="xs"
              >
                {{ request.primaryActionLabel }}
              </BaseButton>

              <BaseButton
                to="/requests/create"
                variant="third"
                size="xs"
              >
                Editar
              </BaseButton>

              <BaseButton
                variant="danger"
                size="xs"
              >
                Eliminar
              </BaseButton>
            </div>
          </td>
        </tr>

        <tr v-if="filteredRequests.length === 0">
          <td
            colspan="7"
            class="px-4 py-10"
          >
            <BaseEmptyState
              title="No se encontraron solicitudes"
              description="Intenta ajustar los filtros o crea una nueva solicitud."
            >
              <template #actions>
                <BaseButton to="/requests/create">
                  Crear solicitud
                </BaseButton>
              </template>
            </BaseEmptyState>
          </td>
        </tr>
      </tbody>
    </BaseTable>
  </section>
</template>
