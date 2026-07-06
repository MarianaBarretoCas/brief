export const createInitialRequestForm = () => ({
  requestName: '',
  requestType: '',
  area: '',
  requesterName: '',
  requesterEmail: '',
  requesterPhone: '',

  requiresBrief: 'yes',

  requestContext: '',

  authorizerName: '',
  authorizerEmail: '',
  authorizationMessage: '',
  authorizationSupportFile: null,

  budgetSupportFile: null,
})

export const requestTypeOptions = [
  {
    label: 'Campaña',
    value: 'campana',
  },
  {
    label: 'Pieza gráfica',
    value: 'pieza-grafica',
  },
  {
    label: 'Pauta digital',
    value: 'pauta-digital',
  },
  {
    label: 'Actualización de información',
    value: 'actualizacion',
  },
  {
    label: 'Apoyo de comunicaciones',
    value: 'apoyo-comunicaciones',
  },
  {
    label: 'Otro',
    value: 'otro',
  },
]

export const areaOptions = [
  {
    label: 'Facultad de Derecho',
    value: 'facultad-derecho',
  },
  {
    label: 'Facultad de Administración de Empresas',
    value: 'facultad-administracion',
  },
  {
    label: 'Facultad de Finanzas, Gobierno y Relaciones Internacionales',
    value: 'facultad-figri',
  },
  {
    label: 'Facultad de Comunicación Social - Periodismo',
    value: 'facultad-comunicacion',
  },
  {
    label: 'Facultad de Economía',
    value: 'facultad-economia',
  },
  {
    label: 'Otra área institucional',
    value: 'otra-area',
  },
]
