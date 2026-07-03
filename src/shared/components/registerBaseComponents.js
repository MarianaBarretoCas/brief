export function registerBaseComponents(app) {
  const components = import.meta.glob('./Base*.vue', {
    eager: true,
    import: 'default',
  })

  Object.entries(components).forEach(([path, component]) => {
    const componentName = path
      .split('/')
      .pop()
      .replace('.vue', '')

    app.component(componentName, component)
  })
}
