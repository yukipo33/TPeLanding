<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <!-- Navigation -->
  <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
    <!-- Image Logo -->
    <div class="row">
      <div class="col-9 col-sm-6 col-md-5 col-lg-4 TPEcontenedorLogo" >
        <a class="navbar-brand logo-image" href="index.html"><img src="images/TPElogo.png" alt="alternative" /></a>
      </div>
      <div class="col-3 col-sm-5 col-md-1 col-lg-1 botonMenu" style="display: inline-block;">
        <!-- Mobile Menu Toggle Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-awesome fas fa-bars"></span>
          <span class="navbar-toggler-awesome fas fa-times"></span>
        </button>
        <!-- end of mobile menu toggle button -->
      </div>
      <div class="col-4 col-sm-4 col-md-6 col-lg-7 collapse navbar-collapse navbarsExampleDefault" id="navbarsExampleDefault">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <!-- <a class="nav-link page-scroll" href="#header">Inicio <span class="sr-only">(current)</span></a> -->
          <router-link class="nav-link page-scroll" to="/">&nbsp;&nbsp;Inicio&nbsp;&nbsp;</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link page-scroll" href="#features">Resultados</a> -->
          <router-link class="nav-link page-scroll" to="/resultados">&nbsp;&nbsp;Resultados&nbsp;&nbsp;</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link page-scroll" href="#preview">Inicio&nbsp;Sesion</a> -->
          <router-link class="nav-link page-scroll" to="/inicioSesion">Contacto</router-link>
        </li>
      </ul>
    </div>
    </div>

    
  </nav>
    </div>
    <router-view/>
    
  </div>
</template>

<style lang="css" scoped>
@import url('../public/css/styles.css');
</style>
