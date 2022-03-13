<script>

</script>

<template>
<div class="column is-4">
  <form class="box">
    <div class="field">
      <div class="control column is-5" id="nombre">
        <input class="input" type="text" placeholder="Nombres">
      </div>
      <div class="control column is-offset-one-fifth" id="apellido">
        <input class="input" type="text" placeholder="Apellidos">
      </div>
    </div>

    <div class="field">
      <div class="select">
        <select>
          <option>Tipo Documento</option>
          <option>Cedula</option>
          <option>Tarjeta Identidad</option>
          <option>Pasaporte</option>
        </select>
      </div>
      <div class="control">
        <input class="input" type="text" placeholder="# de Documento" id="documento">
      </div>
    </div>
    <div class="field">
      <div class="select">
        <select>
          <option>Elija Residencia</option>
          <option>Bucaramanga</option>
          <option>Bogota</option>
          <option>Barranquilla</option>
          <option>Cali</option>
          <option>Cucuta</option>
          <option>Medellin</option>
          <option>Villavicencio</option>
        </select>
      </div>
      <div class="select">
        <select>
          <option>Ciudad nacimiento</option>
          <option>Bucaramanga</option>
          <option>Bogota</option>
          <option>Barranquilla</option>
          <option>Cali</option>
          <option>Cucuta</option>
          <option>Medellin</option>
          <option>Villavicencio</option>
        </select>
      </div>
    </div>


    <div class="field">
      <div class="control">
        <input class="input" type="date">
      </div>
      <div class="control">
        <input class="input" type="tel" placeholder="Telefono">
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input class="input" type="email" placeholder="Correo">
      </div>
      <div class="control">
        <input class="input" type="text" placeholder="Usuario">
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input class="input" type="password" placeholder="Contraseña">
      </div>
      <div class="control">
        <input class="input" type="password" placeholder="Confirmar contraseña">
      </div>
    </div>
    <input class="button is-primary" type="submit">
    <input class="button is-danger" type="reset">
  </form>
</div>

<table class="table">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Documento</th>
      <th># Documento</th>
      <th>Residencia</th>
      <th>Lugar nacimiento</th>
      <th>Fecha nacimiento</th>
      <th>Telefono</th>
      <th>Correo</th>
      <th>Usuario</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>
      </th>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
#documento{
  margin-left: 0.25rem;
}

#nombre{
  padding: 0;
}

#apellido{
  margin-left: 1rem;
  padding: 0;
}

.field{
  display: flex;
}
</style>
