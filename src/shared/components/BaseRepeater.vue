<script setup>
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
    default: '',
  },
  addText: {
    type: String,
    default: 'Agregar ítem',
  },
  minItems: {
    type: Number,
    default: 1,
  },
  maxLength: {
    type: Number,
    default: null,
  },
  textarea: {
    type: Boolean,
    default: true,
  },
  rows: {
    type: Number,
    default: 3,
  },
})

const emit = defineEmits(['update:modelValue'])

const getCharacterText = (value) => {
  const count = String(value || '').length

  if (props.maxLength) {
    return `${count} / ${props.maxLength}`
  }

  return `${count} caracteres`
}

const updateItem = (index, value) => {
  const nextItems = [...props.modelValue]
  nextItems[index] = value
  emit('update:modelValue', nextItems)
}

const addItem = () => {
  emit('update:modelValue', [...props.modelValue, ''])
}

const removeItem = (index) => {
  if (props.modelValue.length <= props.minItems) {
    return
  }

  const nextItems = props.modelValue.filter((_, itemIndex) => itemIndex !== index)
  emit('update:modelValue', nextItems)
}
</script>

<template>
  <div class="space-y-3">
    <div>
      <div class="flex items-center justify-between gap-4">
        <label class="text-sm font-semibold text-stone-700">
          {{ label }}
        </label>

        <span class="text-xs font-semibold text-stone-500">
          {{ modelValue.length }} ítem(s)
        </span>
      </div>

      <p
        v-if="description"
        class="mt-1 text-xs leading-5 text-stone-500"
      >
        {{ description }}
      </p>
    </div>

    <div class="space-y-3">
      <div
        v-for="(item, index) in modelValue"
        :key="index"
        class="rounded-xl border border-stone-200 bg-stone-50 p-3"
      >
        <div class="mb-2 flex items-center justify-between gap-3">
          <span class="text-xs font-bold uppercase tracking-wide text-stone-500">
            Opción {{ index + 1 }}
          </span>

          <div class="flex items-center gap-3">
            <span
              :class="[
                'text-xs font-semibold',
                maxLength && String(item || '').length > maxLength
                  ? 'text-red-600'
                  : 'text-stone-500',
              ]"
            >
              {{ getCharacterText(item) }}
            </span>

            <button
              type="button"
              class="text-xs font-semibold text-red-600 transition hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="modelValue.length <= minItems"
              @click="removeItem(index)"
            >
              Eliminar
            </button>
          </div>
        </div>

        <textarea
          v-if="textarea"
          :value="item"
          :rows="rows"
          :maxlength="maxLength || undefined"
          :placeholder="placeholder"
          class="w-full resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
          @input="updateItem(index, $event.target.value)"
        />

        <input
          v-else
          :value="item"
          :maxlength="maxLength || undefined"
          :placeholder="placeholder"
          class="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
          @input="updateItem(index, $event.target.value)"
        />
      </div>
    </div>

    <BaseButton
      variant="third"
      size="sm"
      @click="addItem"
    >
      + {{ addText }}
    </BaseButton>
  </div>
</template>
