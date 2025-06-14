<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <div class="row">
      <div class="esf-image-background position-relative rounded">
        <div class="esf-image-color-background position-relative top-0 start-0 w-100 h-100 d-flex flex-column rounded">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 esf-text-background">
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
            <div class="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.esf-image-background {
  background-image: url("../assets/about/esf-people.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: absolute;
  overflow: hidden;
  padding: 0;
}

.esf-image-color-background {
  z-index: 1;
  background-color: rgba(29, 169, 122, 0.6);
  padding: 2rem 0;
}

.esf-text-background {
  background-color: rgba(29, 169, 122, 1);
  padding: 2%;
}
</style>
