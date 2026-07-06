import { defineStore } from 'pinia'

import { createInitialRequestForm } from '../data/requestCreate.config'

export const useRequestDraftStore = defineStore('requestDraft', {
  state: () => ({
    code: 'SOL-2026-001',
    status: 'draft',
    form: createInitialRequestForm(),
  }),

  getters: {
    requiresBrief: (state) => {
      return state.form.requiresBrief === 'yes'
    },
  },

  actions: {
    resetRequest() {
      this.code = 'SOL-2026-001'
      this.status = 'draft'
      this.form = createInitialRequestForm()
    },
  },
})
