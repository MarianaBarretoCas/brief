<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Object, String],
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  accept: {
    type: String,
    default: 'image/*,.pdf',
  },
  maxSizeMb: {
    type: Number,
    default: 10,
  },
})

const emit = defineEmits(['update:modelValue'])

const fileInput = ref(null)
const errorMessage = ref('')

const fileName = computed(() => {
  if (!props.modelValue) {
    return ''
  }

  if (typeof props.modelValue === 'string') {
    return props.modelValue
  }

  return props.modelValue.name || ''
})

const fileSize = computed(() => {
  if (!props.modelValue || typeof props.modelValue === 'string') {
    return ''
  }

  const sizeInMb = props.modelValue.size / 1024 / 1024

  return `${sizeInMb.toFixed(2)} MB`
})

const openFilePicker = () => {
  fileInput.value?.click()
}

const handleFileChange = (event) => {
  const file = event.target.files?.[0]

  if (!file) {
    return
  }

  const sizeInMb = file.size / 1024 / 1024

  if (sizeInMb > props.maxSizeMb) {
    errorMessage.value = `El archivo no puede superar ${props.maxSizeMb} MB.`
    emit('update:modelValue', null)
    event.target.value = ''
    return
  }

  errorMessage.value = ''
  emit('update:modelValue', file)
}

const removeFile = () => {
  emit('update:modelValue', null)
  errorMessage.value = ''

  if (fileInput.value) {
    fileInput.value.value = ''
  }
}
</script>

<template>
  <div class="space-y-2">
    <div>
      <label class="text-sm font-semibold text-stone-700">
        {{ label }}
      </label>

      <p
        v-if="description"
        class="mt-1 text-xs leading-5 text-stone-500"
      >
        {{ description }}
      </p>
    </div>

    <input
      ref="fileInput"
      type="file"
      class="hidden"
      :accept="accept"
      @change="handleFileChange"
    />

    <div
      class="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-5 transition hover:border-emerald-300 hover:bg-emerald-50/40"
    >
      <div
        v-if="!modelValue"
        class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p class="text-sm font-semibold text-stone-900">
            Adjuntar soporte
          </p>

          <p class="mt-1 text-xs leading-5 text-stone-500">
            Puedes subir imagen, captura de pantalla o PDF. Máximo {{ maxSizeMb }} MB.
          </p>
        </div>

        <BaseButton
          type="button"
          variant="secondary"
          size="sm"
          @click="openFilePicker"
        >
          Seleccionar archivo
        </BaseButton>
      </div>

      <div
        v-else
        class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p class="text-sm font-bold text-stone-900">
            {{ fileName }}
          </p>

          <p
            v-if="fileSize"
            class="mt-1 text-xs text-stone-500"
          >
            {{ fileSize }}
          </p>
        </div>

        <div class="flex gap-2">
          <BaseButton
            type="button"
            variant="third"
            size="sm"
            @click="openFilePicker"
          >
            Cambiar
          </BaseButton>

          <BaseButton
            type="button"
            variant="dangerSoft"
            size="sm"
            @click="removeFile"
          >
            Quitar
          </BaseButton>
        </div>
      </div>
    </div>

    <p
      v-if="errorMessage"
      class="text-xs font-semibold text-red-600"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
