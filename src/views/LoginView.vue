<template>
  <main class="page-center">
    <section class="login-card">
      <div class="brand-mark">UE</div>

      <h1>Universidad Externado</h1>
      <p>Brief Digital Institucional</p>

      <div class="form-group">
        <label>Correo institucional</label>
        <input type="email" placeholder="usuario@uexternado.edu.co" />
      </div>

      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" placeholder="••••••••" />
      </div>

      <RouterLink to="/dashboard" class="button button-full">
        Ingresar
      </RouterLink>

      <small>Acceso seguro para usuarios autorizados</small>
    </section>
  </main>
</template>
