<script setup>
import TheWelcome from './components/TheWelcome.vue'
import documento from './pages/usuario/App.vue'
</script>

<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
        <a class="navbar-item">CRUD</a>
    </div>
    <div class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item">
                Usuario
            </a>
            <a class="navbar-item">
                Documento
            </a>
            <a class="navbar-item">
                Residencia
            </a>
        </div>
    </div>
</nav>
<main>
  <TheWelcome></TheWelcome>
</main>
</template>

<style lang="css">
@import '../node_modules/bulma/css/bulma.css';
</style>
