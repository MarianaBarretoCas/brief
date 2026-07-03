<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Confirmar acción',
  },
  message: {
    type: String,
    default: '¿Está seguro de realizar esta acción?',
  },
  confirmText: {
    type: String,
    default: 'Confirmar',
  },
  cancelText: {
    type: String,
    default: 'Cancelar',
  },
  confirmVariant: {
    type: String,
    default: 'danger',
  },
})

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])

const close = () => {
  emit('update:modelValue', false)
}

const cancel = () => {
  emit('cancel')
  close()
}

const confirm = () => {
  emit('confirm')
  close()
}
</script>

<template>
  <BaseModal
    :model-value="modelValue"
    :title="title"
    size="sm"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <p class="text-sm leading-6 text-stone-600">
      {{ message }}
    </p>

    <template #footer>
      <BaseButton
        variant="secondary"
        @click="cancel"
      >
        {{ cancelText }}
      </BaseButton>

      <BaseButton
        :variant="confirmVariant"
        @click="confirm"
      >
        {{ confirmText }}
      </BaseButton>
    </template>
  </BaseModal>
</template>
