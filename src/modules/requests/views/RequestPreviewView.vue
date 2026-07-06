<script setup>
import { useRequestDraftStore } from '../stores/requestDraft.store'

const requestStore = useRequestDraftStore()
const form = requestStore.form

const formatValue = (value) => {
  return value || 'No registrado'
}

const formatFileName = (file) => {
  if (!file) {
    return 'No adjunto'
  }

  if (typeof file === 'string') {
    return file
  }

  return file.name || 'Archivo adjunto'
}
</script>

<template>
  <section class="space-y-6">
    <BasePageHeader
      eyebrow="Vista previa"
      title="Revisión de solicitud"
      description="Verifica la información registrada antes de enviar la solicitud."
    >
      <template #actions>
        <BaseButton
          to="/requests/create"
          variant="secondary"
        >
          Volver
        </BaseButton>

        <BaseButton>
          Enviar solicitud
        </BaseButton>
      </template>
    </BasePageHeader>

    <div class="grid gap-6 xl:grid-cols-[1fr_320px]">
      <div class="space-y-6">
        <BaseCard
          title="Datos generales"
          subtitle="Información principal de la solicitud."
        >
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Código
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ requestStore.code }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Nombre de solicitud
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(form.requestName) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Tipo de solicitud
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(form.requestType) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Área
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(form.area) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Solicitante
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(form.requesterName) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Correo
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(form.requesterEmail) }}
              </p>
            </div>
          </div>
        </BaseCard>

        <BaseCard
          title="Contexto"
          subtitle="Mensaje registrado por el solicitante."
        >
          <p class="text-sm leading-6 text-stone-700">
            {{ formatValue(form.requestContext) }}
          </p>
        </BaseCard>

        <BaseCard
          title="Autorización y soportes"
          subtitle="Evidencias adjuntas a la solicitud."
        >
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Persona que autoriza
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(form.authorizerName) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Correo de quien autoriza
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatValue(form.authorizerEmail) }}
              </p>
            </div>

            <div class="md:col-span-2">
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Mensaje de autorización
              </p>
              <p class="mt-1 text-sm leading-6 text-stone-700">
                {{ formatValue(form.authorizationMessage) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Soporte de autorización
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatFileName(form.authorizationSupportFile) }}
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-stone-500">
                Soporte de presupuesto
              </p>
              <p class="mt-1 text-sm font-semibold text-stone-900">
                {{ formatFileName(form.budgetSupportFile) }}
              </p>
            </div>
          </div>
        </BaseCard>
      </div>

      <aside class="space-y-4">
        <BaseCard
          title="Estado"
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
              <span class="text-stone-500">Requiere brief</span>
              <span class="font-semibold text-stone-900">
                No
              </span>
            </div>
          </div>
        </BaseCard>

        <BaseCard
          title="Acciones"
          subtitle="Opciones disponibles."
        >
          <div class="grid gap-3">
            <BaseButton>
              Enviar solicitud
            </BaseButton>

            <BaseButton
              to="/requests/create"
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
