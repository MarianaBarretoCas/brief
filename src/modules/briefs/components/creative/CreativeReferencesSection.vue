<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
})

const activeGroup = ref('characterReferences')
const currentValue = ref('')

const groups = [
  {
    key: 'characterReferences',
    label: 'Personajes',
    shortLabel: 'Personajes',
    maxItems: 5,
    description: 'Incluya referencias de personajes o estilos humanos que puedan orientar la comunicación visual.',
    placeholder: 'Pega una URL o describe un personaje de referencia...',
  },
  {
    key: 'graphicSupportReferences',
    label: 'Elementos gráficos de apoyo',
    shortLabel: 'Elementos gráficos',
    maxItems: 5,
    description: 'Incluya referencias de imágenes, íconos, ilustraciones o recursos gráficos de apoyo.',
    placeholder: 'Pega una URL o describe un elemento gráfico...',
  },
]

const selectedGroup = computed(() => {
  return groups.find((group) => group.key === activeGroup.value) || groups[0]
})

const selectedItems = computed(() => {
  return props.form[selectedGroup.value.key] || []
})

const addReference = () => {
  const value = currentValue.value.trim()

  if (!value) {
    return
  }

  if (selectedItems.value.length >= selectedGroup.value.maxItems) {
    return
  }

  props.form[selectedGroup.value.key].push(value)
  currentValue.value = ''
}

const removeReference = (index) => {
  props.form[selectedGroup.value.key].splice(index, 1)
}

const selectGroup = (key) => {
  activeGroup.value = key
  currentValue.value = ''
}
</script>

<template>
  <BaseCard
    title="Referentes gráficos"
    subtitle="Referencias visuales para orientar la propuesta gráfica de la campaña."
  >
    <div class="space-y-5">
      <div class="rounded-xl border border-stone-200 bg-stone-50 p-4">
        <p class="text-sm font-semibold text-stone-800">
          Incluya 5 referencias para cada grupo.
        </p>

        <p class="mt-1 text-xs leading-5 text-stone-500">
          En borrador puedes dejar esta información incompleta. Antes de enviar el brief se validará que los referentes estén completos.
        </p>
      </div>

      <div class="grid gap-3 md:grid-cols-2">
        <button
          v-for="group in groups"
          :key="group.key"
          type="button"
          :class="[
            'rounded-xl border px-4 py-3 text-left transition',
            activeGroup === group.key
              ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
              : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50',
          ]"
          @click="selectGroup(group.key)"
        >
          <div class="flex items-center justify-between gap-3">
            <span class="text-sm font-bold">
              {{ group.shortLabel }}
            </span>

            <span class="rounded-full bg-white px-3 py-1 text-xs font-bold">
              {{ form[group.key].length }} / {{ group.maxItems }}
            </span>
          </div>
        </button>
      </div>

      <div>
        <label class="text-sm font-semibold text-stone-700">
          {{ selectedGroup.label }}
        </label>

        <p class="mt-1 text-xs leading-5 text-stone-500">
          {{ selectedGroup.description }}
        </p>

        <div class="mt-3 grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            v-model="currentValue"
            :placeholder="selectedGroup.placeholder"
            class="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
            @keydown.enter.prevent="addReference"
          />

          <BaseButton
            type="button"
            variant="secondary"
            :disabled="selectedItems.length >= selectedGroup.maxItems"
            @click="addReference"
          >
            Agregar
          </BaseButton>
        </div>
      </div>

      <div
        v-if="selectedItems.length"
        class="overflow-hidden rounded-xl border border-stone-200"
      >
        <div class="grid grid-cols-[70px_1fr_90px] bg-stone-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-stone-500">
          <span>#</span>
          <span>Referencia</span>
          <span class="text-right">Acción</span>
        </div>

        <div class="divide-y divide-stone-100 bg-white">
          <div
            v-for="(item, index) in selectedItems"
            :key="`${item}-${index}`"
            class="grid grid-cols-[70px_1fr_90px] items-center px-4 py-3 text-sm"
          >
            <span class="font-semibold text-stone-500">
              {{ index + 1 }}
            </span>

            <span class="break-all text-stone-800">
              {{ item }}
            </span>

            <button
              type="button"
              class="text-right text-xs font-semibold text-red-600 transition hover:text-red-700"
              @click="removeReference(index)"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>

      <BaseEmptyState
        v-else
        title="Aún no hay referencias"
        description="Agrega una URL o descripción para este grupo de referentes."
      />
    </div>
  </BaseCard>
</template>
