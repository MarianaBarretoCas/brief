<template>
  <main class="page">
    <header class="app-header">
      <div>
        <strong>Brief Digital Institucional</strong>
        <span>Universidad Externado</span>
      </div>

      <span class="saved-status">Guardado ✓</span>
    </header>

    <section class="page-header">
      <div>
        <h1>Crear brief: Filosofía y Derecho</h1>
        <p>Estado: Borrador · Código: BRF-2026-001</p>
      </div>
    </section>

    <section class="form-layout">
      <aside class="steps">
        <strong>Pasos</strong>

        <RouterLink to="/briefs/create" class="active-step">
          1. Datos generales
        </RouterLink>

        <RouterLink to="/briefs/BRF-2026-001/programs">
          2. Programas
        </RouterLink>

        <RouterLink to="/briefs/BRF-2026-001/creative-inputs">
          3. Insumos creativos
        </RouterLink>

        <RouterLink to="/briefs/BRF-2026-001/preview">
          4. Vista previa
        </RouterLink>
      </aside>

      <form class="panel">
        <h2>Paso 1: Datos generales</h2>

        <label>Nombre de la campaña</label>
        <input value="Filosofía y Derecho" />

        <label>Facultad / área</label>
        <select>
          <option>Derecho</option>
          <option>Administración</option>
          <option>Finanzas</option>
        </select>

        <label>Solicitante</label>
        <input value="Natalia Campos" />

        <label>Correo del solicitante</label>
        <input value="usuario@uexternado.edu.co" />

        <label>Teléfono / extensión</label>
        <input value="1234" />

        <div class="actions">
          <button type="button" class="button-secondary">
            Guardar borrador
          </button>

          <RouterLink to="/briefs/BRF-2026-001/programs" class="button">
            Siguiente
          </RouterLink>
        </div>

        <p class="autosave-text">
          Último guardado automático: hace 8 segundos
        </p>
      </form>
    </section>
  </main>
</template>
