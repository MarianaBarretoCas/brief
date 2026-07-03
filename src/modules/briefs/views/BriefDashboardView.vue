<template>
  <section class="space-y-6">
    <BasePageHeader
      title="Mis briefs"
      description="Consulta y administra tus briefs institucionales."
    >
      <template #actions>
        <BaseButton to="/briefs/create" size="md"> + Nuevo brief </BaseButton>
      </template>
    </BasePageHeader>

    <div class="grid gap-6 md:grid-cols-4">
      <BaseStatCard label="Total" value="3" />
      <BaseStatCard label="Borradores" value="2" />
      <BaseStatCard label="Enviados" value="1" />
      <BaseStatCard label="Devueltos" value="0" />
    </div>

    <BaseTable
      title="Briefs registrados"
      description="Listado general de solicitudes creadas por el usuario."
    >
      <template #toolbar>
        <div class="grid gap-4 md:grid-cols-[1fr_240px]">
          <BaseInput placeholder="Buscar por código o nombre de campaña..." />

          <BaseSelect
            model-value="Todos"
            :options="['Todos', 'Borrador', 'Enviado', 'Devuelto']"
          />
        </div>
      </template>

      <thead
        class="bg-stone-50 text-left text-xs uppercase tracking-wide text-stone-500"
      >
        <tr class="text-center">
          <th class="px-4 py-3">Código</th>

          <th class="px-4 py-3">Nombre campaña</th>

          <th class="px-4 py-3">Estado</th>

          <th class="w-[280px] px-4 py-3">Acciones</th>
        </tr>
      </thead>

      <tbody class="divide-y divide-stone-100 text-center">
        <tr class="transition hover:bg-stone-50">
          <td class="px-4 py-4 font-medium text-stone-900">BRF-2026-001</td>

          <td class="px-4 py-4 text-stone-700">Filosofía y Derecho</td>

          <td class="px-4 py-4">
            <BaseBadge variant="draft"> Borrador </BaseBadge>
          </td>

          <td class="px-4 py-4">
            <div class="flex justify-end gap-2">
              <BaseButton to="/briefs/create" variant="completing" size="xs">
                Editar
              </BaseButton>

              <BaseButton to="/briefs/create" variant="third" size="xs">
                Actualizar
              </BaseButton>

              <BaseButton variant="danger" size="xs"> Eliminar </BaseButton>
            </div>
          </td>
        </tr>

        <tr class="transition hover:bg-stone-50">
          <td class="px-4 py-4 font-medium text-stone-900">BRF-2026-002</td>

          <td class="px-4 py-4 text-stone-700">Campaña Posgrados</td>

          <td class="px-4 py-4">
            <BaseBadge variant="submitted"> Enviado </BaseBadge>
          </td>

          <td class="px-4 py-4">
            <div class="flex justify-end gap-2">
              <BaseButton
                to="/briefs/BRF-2026-002/detail"
                variant="secondary"
                size="xs"
              >
                Ver
              </BaseButton>

              <BaseButton to="/briefs/create" variant="third" size="xs">
                Actualizar
              </BaseButton>

              <BaseButton variant="danger" size="xs"> Eliminar </BaseButton>
            </div>
          </td>
        </tr>

        <tr class="transition hover:bg-stone-50">
          <td class="px-4 py-4 font-medium text-stone-900">BRF-2026-003</td>

          <td class="px-4 py-4 text-stone-700">Derecho 2026</td>

          <td class="px-4 py-4">
            <BaseBadge variant="returned"> Devuelto </BaseBadge>
          </td>

          <td class="px-4 py-4">
            <div class="flex justify-end gap-2">
              <BaseButton to="/briefs/create" variant="completing" size="xs">
                Editar
              </BaseButton>

              <BaseButton to="/briefs/create" variant="third" size="xs">
                Actualizar
              </BaseButton>

              <BaseButton variant="danger" size="xs"> Eliminar </BaseButton>
            </div>
          </td>
        </tr>
      </tbody>
    </BaseTable>
  </section>
</template>
