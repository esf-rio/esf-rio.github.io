<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="fundo-fixo position-relative">
    <div class="overlay-content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h1></h1>
          </div>
          <div class="col-md-8">
            <div>
              <h1 class="text-start text-light fw-bold fs-3 mb-4">Quem pode ser um parceiro?</h1>
              <p class="text-start text-light fs-5 mb-5">
                Buscamos outras organizações e empresas, que alinhadas aos nossos ideais, possam forjar alianças sólidas com participações além-financeiras fundamentais para nossa organização.
              </p>
            </div>
            <div>
              <h1 class="text-start text-light fw-bold fs-3 mb-4">Como ser um parceiro?</h1>
              <p class="text-start text-light fs-5 mb-4">
                Envie sua proposta de parceria para o e-mail 
                <span style="text-decoration: underline;"><strong>parcerias@esf-rio.org</strong></span>, 
                detalhando seus objetivos e propósitos, ressaltando as possibilidades de sinergia entre as organizações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fundo-fixo {
  height: 70vh;
  background-image: url("../assets/about/esf-people.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
}

.overlay-content {
  background-color: rgba(29, 169, 122, 0.6);
  padding: 2rem 0;
}

.col-md-8 {

  background-color: rgba(29, 169, 122, 1);
  padding: 3rem;
  position: absolute;
  top: 10%;
  right: 10%;
}

.col-md-8 h1 {
    font-size: 30px;
    font-family: "Lato", Sans-serif;
    
}

.col-md-8 p {
    font-size: 100%;
    font-weight: inherit;
}
</style>
