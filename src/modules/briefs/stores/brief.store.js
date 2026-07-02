import { defineStore } from 'pinia'

export const useBriefStore = defineStore('brief', {
  state: () => ({
    currentBrief: null,
    autosaveStatus: 'Guardado',
  }),
})
