<script setup lang="ts">

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container-fluid">
      <div class="navbar-brand">
        <img src="../assets/navbar/esf-logo.png" class="img-fluid" alt="Engenheiros Sem Fronteiras Rio de Janeiro Logo" width="150" height="200">
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse bs-success" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link link-success" href="#/about">Sobre Nós</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link link-success" href="#/team">Equipe</a>
          </li> -->
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Trabalhe Conosco
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Voluntariado</a></li>
              <li><a class="dropdown-item" href="#">Parceria</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projetos
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">E Tá Nóis (COVID-19)</a></li>
              <li><a class="dropdown-item" href="#">Revista PROVER</a></li>
            </ul>
          </li> -->
          <li class="nav-item">
            <a class="nav-link link-success" href="#/transparency">Transparência</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Doação</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">FAQ</a>
          </li> -->
        </ul>

        <div class="row text-center">
          <div class="col">
            <a href="https://www.linkedin.com/company/esf-rio">
              <i class="bi bi-linkedin esf-icon"></i>
            </a>
          </div>
          <div class="col">
            <a href="https://www.instagram.com/esf.riodejaneiro/">
              <i class="bi bi-instagram esf-icon"></i>
            </a>
          </div>
          <div class="col">
            <a href="https://github.com/esf-rio/esf-rio.github.io">
              <i class="bi bi-github esf-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .esf-icon {
    font-size: 1.5rem;
    color: #3d393a;
    /* color: #1da97a; */
  }

  .esf-icon:hover {
    font-size: 1.5rem;
    color: #1da97a;
    /* color: #3d393a; */
  }
</style>
