export const createInitialProgram = () => ({
  localId: `program-${Date.now()}-${Math.random().toString(16).slice(2)}`,

  programName: '',
  snies: '',
  menResolution: '',
  requiredLeads: '',
  previousLeadCost: '',

  enrollmentGoal: '',
  installStartDate: '',
  installEndDate: '',
  classStartDate: '',

  programUrl: '',

  valueProposition: '',
  differentiators: '',
  programObjective: '',
  mainCompetitors: '',

  cities: '',
  ageRange: '',
  positions: '',
  professions: '',
  interests: '',
  graduateUniversities: '',
  organizations: '',
})
