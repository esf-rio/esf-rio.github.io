<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 767;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<template>
  <div class="row mb-4">
    <div class="col">
      <div class="position-relative text-center">
        <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/prover/Logo-PROVER.png" class="img-fluid w-100 rounded" id="cropped-image" alt="Imagem Grupo de voluntários">
        <div class="overlay rounded"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 class="text-light">Edição 1</h1>
        </div>
      </div>
    </div>
  </div>

  <!-- ======= 'Quem Somos' desktop (init) ======= -->
  <!-- <div v-if="!isMobile" class="row mb-4"> -->


  <div class="row mb-4">
    <div class="col">
      <div class="card" style="">
        <div class="card-body">
          <h5 class="text-esf">Artigos Aprovados <i class="bi bi-file-earmark-check"></i> </h5>

          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/refs/heads/main/website/src/assets/prover/edition1/%5B1%5D%20%5BRevista%20Prover%5D%20Uma%20M%C3%A3o%20Lava%20a%20Outra.pdf" class="card-link">Uma Mão Lava a Outra (PDF)</a></li>
            <li class="list-group-item"><a href="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/refs/heads/main/website/src/assets/prover/edition1/%5B2%5D%20%5BRevista%20Prover%5D%20Caf%C3%AA%20com%20ci%C3%AAncia.pdf" class="card-link">Cafê com ciência (PDF)</a></li>
            <li class="list-group-item"><a href="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/refs/heads/main/website/src/assets/prover/edition1/%5B3%5D%20%5BRevista%20Prover%5D%20%C3%8Dndice%20de%20Caminhabilidade%20para%20o%20bairro%20da%20Urca.pdf" class="card-link">Índice de Caminhabilidade para o bairro da Urca (PDF)</a></li>
            <li class="list-group-item"><a href="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/refs/heads/main/website/src/assets/prover/edition1/%5B4%5D%20%5BRevista%20Prover%5D%20Uso%20de%20dados%20georreferenciados%20na%20localiza%C3%A7%C3%A3o%20de%20servi%C3%A7os%20p%C3%BAblicos%20de%20sa%C3%BAde.pdf" class="card-link">Uso de dados georreferenciados na localização de serviços públicos de saúde (PDF)</a></li>
            <li class="list-group-item"><a href="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/refs/heads/main/website/src/assets/prover/edition1/%5B5%5D%20%5BRevista%20Prover%5D%20Estrutura%C3%A7%C3%A3o%20do%20problema%20de%20investimentos%20em%20melhoria%20da%20rede%20p%C3%BAblica%20de%20ensino.pdf" class="card-link">Estruturação do problema de investimentos em melhoria da rede pública de ensino (PDF)</a></li>
          </ul>

        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
#cropped-image {
  object-fit: cover;
  object-position: center center;
  height: 400px
}


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 169, 122, 0.8);
}


</style>