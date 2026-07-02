import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      name: 'Usuario',
      email: 'usuario@uexternado.edu.co',
      role: 'solicitante',
    },
  }),
})
