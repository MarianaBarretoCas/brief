<template>
  <main class="page">
    <header class="app-header">
      <div>
        <strong>Brief Digital Institucional</strong>
        <span>Universidad Externado</span>
      </div>

      <span>Usuario ▾</span>
    </header>

    <section class="page-header">
      <div>
        <h1>Detalle del brief</h1>
        <p>BRF-2026-001</p>
      </div>
    </section>

    <section class="panel">
      <p><strong>Campaña:</strong> Filosofía y Derecho</p>
      <p><strong>Estado:</strong> Enviado</p>
      <p><strong>Ticket Proactivanet:</strong> Sin relacionar</p>

      <div class="actions start">
        <button class="button-secondary">Exportar Excel</button>
        <button class="button-secondary">Relacionar ticket</button>

        <RouterLink to="/briefs/BRF-2026-001/preview" class="button-secondary">
          Ver vista previa
        </RouterLink>
      </div>
    </section>

    <section class="panel">
      <h2>Historial</h2>

      <ul class="timeline">
        <li>01/07/2026 09:10 - Brief creado</li>
        <li>01/07/2026 09:20 - Datos generales actualizados</li>
        <li>01/07/2026 09:35 - Programas incluidos actualizados</li>
        <li>01/07/2026 10:00 - Brief enviado</li>
      </ul>
    </section>
  </main>
</template>
