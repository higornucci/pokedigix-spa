<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">Home</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Expandir">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/ataques" class="nav-link">Ataques</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/tipos" class="nav-link">Tipos</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">Sobre</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-3">
      <RouterView />
    </div>
  </header>
</template>