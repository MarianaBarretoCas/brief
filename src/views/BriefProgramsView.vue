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
        <h1>Programas incluidos</h1>
        <p>Agrega los programas que harán parte de la campaña.</p>
      </div>

      <button class="button-secondary">+ Agregar</button>
    </section>

    <section class="panel">
      <h2>Programa 1</h2>

      <div class="grid-2">
        <div>
          <label>Nombre del programa</label>
          <input value="Maestría en Teoría Jurídica y Filosofía del Derecho" />
        </div>

        <div>
          <label>SNIES</label>
          <input value="116157" />
        </div>
      </div>

      <label>Resolución MEN</label>
      <input value="SNIES: 116157 | Presencial - Bogotá - 2 años" />

      <div class="grid-3">
        <div>
          <label>Leads requeridos</label>
          <input value="100" />
        </div>

        <div>
          <label>Costo por lead</label>
          <input value="$27.000" />
        </div>

        <div>
          <label>Meta matriculados</label>
          <input value="30" />
        </div>
      </div>

      <label>URL programa</label>
      <input value="https://www.uexternado.edu.co/programa/derecho/maestria-en-teoria-juridica-y-filosofia-del-derecho/" />

      <div class="actions">
        <RouterLink to="/briefs/create" class="button-secondary">
          Anterior
        </RouterLink>

        <RouterLink to="/briefs/BRF-2026-001/creative-inputs" class="button">
          Siguiente
        </RouterLink>
      </div>
    </section>
  </main>
</template>
