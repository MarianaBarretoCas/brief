<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Escribe y presiona Enter',
  },
  minItems: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['update:modelValue'])

const currentValue = ref('')

const isComplete = computed(() => {
  return props.minItems === 0 || props.modelValue.length >= props.minItems
})

const addTags = () => {
  const rawValue = currentValue.value.trim()

  if (!rawValue) {
    return
  }

  const newValues = rawValue
    .split(/[,;\n]/)
    .map((value) => value.trim())
    .filter(Boolean)

  const nextValues = [...props.modelValue]

  newValues.forEach((value) => {
    const alreadyExists = nextValues.some(
      (tag) => tag.toLowerCase() === value.toLowerCase(),
    )

    if (!alreadyExists) {
      nextValues.push(value)
    }
  })

  emit('update:modelValue', nextValues)
  currentValue.value = ''
}

const removeTag = (index) => {
  const nextValues = props.modelValue.filter((_, itemIndex) => itemIndex !== index)
  emit('update:modelValue', nextValues)
}
</script>

<template>
  <div class="space-y-4">
    <div>
      <div class="flex items-center justify-between gap-4">
        <label class="text-sm font-semibold text-stone-700">
          {{ label }}
        </label>

        <span
          :class="[
            'rounded-full px-3 py-1 text-xs font-bold',
            isComplete
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-amber-50 text-amber-700',
          ]"
        >
          {{ modelValue.length }} / {{ minItems }}
        </span>
      </div>

      <p
        v-if="description"
        class="mt-1 text-xs leading-5 text-stone-500"
      >
        {{ description }}
      </p>
    </div>

    <div
      v-if="$slots.help"
      class="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-xs leading-5 text-emerald-900"
    >
      <slot name="help" />
    </div>

    <div class="grid gap-3 md:grid-cols-[1fr_auto]">
      <input
        v-model="currentValue"
        :placeholder="placeholder"
        class="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
        @keydown.enter.prevent="addTags"
      />

      <BaseButton
        type="button"
        variant="secondary"
        @click="addTags"
      >
        Agregar
      </BaseButton>
    </div>

    <p class="text-xs leading-5 text-stone-500">
      También puedes pegar varias palabras separadas por coma, punto y coma o salto de línea.
    </p>

    <div
      v-if="modelValue.length"
      class="overflow-hidden rounded-xl border border-stone-200"
    >
      <div class="grid grid-cols-[1fr_120px_90px] bg-stone-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-stone-500">
        <span>Palabra clave</span>
        <span class="text-center">Caracteres</span>
        <span class="text-right">Acción</span>
      </div>

      <div class="divide-y divide-stone-100 bg-white">
        <div
          v-for="(tag, index) in modelValue"
          :key="`${tag}-${index}`"
          class="grid grid-cols-[1fr_120px_90px] items-center px-4 py-3 text-sm"
        >
          <span class="font-medium text-stone-800">
            {{ tag }}
          </span>

          <span class="text-center text-xs font-semibold text-stone-500">
            {{ tag.length }}
          </span>

          <button
            type="button"
            class="text-right text-xs font-semibold text-red-600 transition hover:text-red-700"
            @click="removeTag(index)"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>

    <BaseEmptyState
      v-else
      title="Aún no hay palabras clave"
      description="Agrega términos de búsqueda relacionados con el programa, el perfil profesional, las necesidades del mercado o los beneficios del programa."
    />

    <p
      v-if="minItems && !isComplete"
      class="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800"
    >
      Debes registrar mínimo {{ minItems }} palabras clave antes de enviar el brief.
      Puedes guardar como borrador aunque aún no completes el mínimo.
    </p>
  </div>
</template>
