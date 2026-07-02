export const briefService = {
  async getBriefs() {
    return []
  },

  async createBrief(payload) {
    return payload
  },

  async updateBrief(id, payload) {
    return { id, ...payload }
  },
}
