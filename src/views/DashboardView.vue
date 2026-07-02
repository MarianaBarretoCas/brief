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
        <h1>Mis briefs</h1>
        <p>Consulta y administra tus briefs institucionales.</p>
      </div>

      <RouterLink to="/briefs/create" class="button">
        + Nuevo brief
      </RouterLink>
    </section>

    <section class="cards-grid">
      <article class="card">
        <span>Total</span>
        <strong>3</strong>
      </article>

      <article class="card">
        <span>Borradores</span>
        <strong>2</strong>
      </article>

      <article class="card">
        <span>Enviados</span>
        <strong>1</strong>
      </article>

      <article class="card">
        <span>Devueltos</span>
        <strong>0</strong>
      </article>
    </section>

    <section class="toolbar">
      <input type="text" placeholder="Buscar brief..." />

      <select>
        <option>Estado: Todos</option>
        <option>Borrador</option>
        <option>Enviado</option>
        <option>Devuelto</option>
      </select>
    </section>

    <section class="panel">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre campaña</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>BRF-2026-001</td>
            <td>Filosofía y Derecho</td>
            <td><span class="badge">Borrador</span></td>
            <td>
              <RouterLink to="/briefs/create" class="table-action">
                Editar
              </RouterLink>
            </td>
          </tr>

          <tr>
            <td>BRF-2026-002</td>
            <td>Campaña Posgrados</td>
            <td><span class="badge">Enviado</span></td>
            <td>
              <RouterLink to="/briefs/BRF-2026-002/detail" class="table-action">
                Ver
              </RouterLink>
            </td>
          </tr>

          <tr>
            <td>BRF-2026-003</td>
            <td>Derecho 2026</td>
            <td><span class="badge">Devuelto</span></td>
            <td>
              <RouterLink to="/briefs/create" class="table-action">
                Editar
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>
