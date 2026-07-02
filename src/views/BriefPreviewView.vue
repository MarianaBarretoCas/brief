<template>
  <main class="page">
    <header class="app-header">
      <div>
        <strong>Brief Digital Institucional</strong>
        <span>Universidad Externado</span>
      </div>

      <strong>BRF-2026-001</strong>
    </header>

    <section class="page-header">
      <div>
        <h1>Vista previa del brief</h1>
        <p>Estado: Borrador · Última edición: 01/07/2026 11:40 a. m.</p>
      </div>
    </section>

    <section class="panel">
      <h2>Datos generales</h2>
      <p><strong>Campaña:</strong> Filosofía y Derecho</p>
      <p><strong>Facultad:</strong> Derecho</p>
      <p><strong>Solicitante:</strong> Natalia Campos</p>
    </section>

    <section class="panel">
      <h2>Programas incluidos</h2>
      <p>Maestría en Teoría Jurídica y Filosofía del Derecho</p>
      <p><strong>SNIES:</strong> 116157</p>
      <p><strong>Meta matriculados:</strong> 30</p>
    </section>

    <section class="panel">
      <h2>Insumos creativos</h2>
      <p><strong>Textos pieza gráfica:</strong> 2</p>
      <p><strong>Captions:</strong> 3</p>
      <p><strong>Palabras clave SEM:</strong> 20</p>
    </section>

    <section class="actions">
      <RouterLink to="/briefs/create" class="button-secondary">
        Editar
      </RouterLink>

      <button class="button-secondary">Guardar borrador</button>
      <button class="button-secondary">Exportar Excel</button>

      <RouterLink to="/briefs/BRF-2026-001/detail" class="button">
        Enviar
      </RouterLink>
    </section>
  </main>
</template>
