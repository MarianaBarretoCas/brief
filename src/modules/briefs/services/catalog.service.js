import { mockBriefCatalogs } from '../data/mockCatalogs.js'

export const catalogService = {
  async getBriefCreateCatalogs() {
    return mockBriefCatalogs
  },
}
