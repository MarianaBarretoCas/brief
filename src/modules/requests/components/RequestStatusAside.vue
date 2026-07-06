<script setup>
defineProps({
  form: {
    type: Object,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <aside class="space-y-4">
    <BaseCard
      title="Estado de solicitud"
      subtitle="Resumen del flujo inicial."
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
          <span class="font-semibold text-stone-900">{{ code }}</span>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-stone-500">Requiere brief</span>
          <span class="font-semibold text-stone-900">
            {{ form.requiresBrief === 'yes' ? 'Sí' : 'No' }}
          </span>
        </div>
      </div>
    </BaseCard>

    <BaseCard
      title="Flujo"
      subtitle="Ruta según el tipo de solicitud."
    >
      <ol class="space-y-3 text-sm">
        <li class="flex items-center gap-3 font-semibold text-emerald-800">
          <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs">
            1
          </span>
          Solicitud inicial
        </li>

        <li
          :class="[
            'flex items-center gap-3',
            form.requiresBrief === 'yes' ? 'text-stone-500' : 'font-semibold text-emerald-800',
          ]"
        >
          <span
            :class="[
              'flex h-7 w-7 items-center justify-center rounded-full text-xs',
              form.requiresBrief === 'yes' ? 'bg-stone-100' : 'bg-emerald-100',
            ]"
          >
            2
          </span>
          {{ form.requiresBrief === 'yes' ? 'Brief completo' : 'Vista previa' }}
        </li>

        <li
          v-if="form.requiresBrief === 'yes'"
          class="flex items-center gap-3 text-stone-500"
        >
          <span class="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-xs">
            3
          </span>
          Vista previa
        </li>
      </ol>
    </BaseCard>
  </aside>
</template>
