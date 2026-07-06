export const createInitialBriefForm = () => ({
  campaignName: '',
  faculty: '',
  requesterName: '',
  requesterEmail: '',
  requesterPhone: '',
  requesterPosition: '',
  requestDate: '',

  services: {
    strategy: false,
    digitalAds: false,
    atl: false,
  },

  strategyReason: '',
  digitalAdsReason: '',
  atlReason: '',

  tacticalObjective: '',
  adsObjective: '',

  enrollmentGoal: '',
  registrationGoal: '',
  leadsGoal: '',

  totalBudget: '',
  costCenter: '',
  costCenterName: '',
  budgetLine: '',

  startDate: '',
  endDate: '',
})
