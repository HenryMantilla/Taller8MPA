<script>
export default {
    name: documento,
    components:{
        TheWelcome: () => import('@/components/TheWelcome.vue')
    }
}
</script>

<template>
<div id="app">
<nav class="navbar is-dark">
    <div class="navbar-brand">
        <a class="navbar-item">CRUD</a>
    </div>
    <div class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="./pages/usuario">
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
<div class="column is-4">
    <div class="box">
        <div class="field">
            <div class="control column-is-5">
                <input class="input" type="text" placeholder="Tipo documento">
            </div>
        </div>
    </div>
</div>
</div>
<main>
    <TheWelcome></TheWelcome>
</main>
</template>
