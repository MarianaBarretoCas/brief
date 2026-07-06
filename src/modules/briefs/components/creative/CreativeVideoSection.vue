<script setup>
defineProps({
  form: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <BaseCard
    title="Guion para video o reel"
    subtitle="Información para orientar piezas audiovisuales."
  >
    <div class="space-y-6">
      <BaseTextarea
        v-model="form.videoScript"
        label="Guion para video o reel"
        placeholder="Describe la idea, escenas, mensajes principales o estructura esperada del video..."
        :rows="6"
        :max-length="1000"
      />

      <div class="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
        <p class="text-sm font-bold text-emerald-900">
          Referencia de duración sugerida
        </p>

        <div class="mt-3 grid gap-3 text-xs text-emerald-900 md:grid-cols-3">
          <div class="rounded-lg bg-white/70 p-3">
            <p class="font-bold">15 segundos</p>
            <p class="mt-1">200 a 250 caracteres</p>
          </div>

          <div class="rounded-lg bg-white/70 p-3">
            <p class="font-bold">30 segundos</p>
            <p class="mt-1">400 a 500 caracteres</p>
          </div>

          <div class="rounded-lg bg-white/70 p-3">
            <p class="font-bold">60 segundos</p>
            <p class="mt-1">900 a 1.000 caracteres máximo</p>
          </div>
        </div>
      </div>

      <BaseRepeater
        v-model="form.videoReelElements"
        label="Elementos para videos o reels"
        description="Incluya enlaces de imágenes, íconos, ilustraciones o cualquier recurso visual que deba ser integrado en videos o reels."
        placeholder="Pega una URL o describe el recurso visual..."
        add-text="Agregar recurso"
        :min-items="1"
        :rows="3"
      />
    </div>
  </BaseCard>
</template>
