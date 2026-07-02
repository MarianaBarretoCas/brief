<template>
  <main class="page">
    <header class="app-header">
      <div>
        <strong>Brief Digital Institucional</strong>
        <span>Universidad Externado</span>
      </div>

      <span>Guardado ✓</span>
    </header>

    <section class="page-header">
      <div>
        <h1>Insumos creativos</h1>
        <p>Copies, captions, referentes gráficos y palabras clave SEM.</p>
      </div>
    </section>

    <section class="panel">
      <label>Especificaciones para el copy</label>
      <textarea placeholder="Tono académico-aspiracional, directo y sin clichés..."></textarea>

      <h2>Textos para pieza gráfica</h2>

      <div class="input-row">
        <input value="Comprende el derecho. Cuestiónalo. Transfórmalo." />
        <span>48 / 90</span>
      </div>

      <div class="input-row">
        <input value="Forma tu pensamiento jurídico en el más alto nivel." />
        <span>51 / 90</span>
      </div>

      <button class="button-secondary" type="button">
        + Agregar texto
      </button>

      <h2>Captions sugeridos</h2>

      <textarea placeholder="Caption opción 1"></textarea>
      <textarea placeholder="Caption opción 2"></textarea>
      <textarea placeholder="Caption opción 3"></textarea>

      <div class="actions">
        <RouterLink to="/briefs/BRF-2026-001/programs" class="button-secondary">
          Anterior
        </RouterLink>

        <RouterLink to="/briefs/BRF-2026-001/preview" class="button">
          Siguiente
        </RouterLink>
      </div>
    </section>
  </main>
</template>
