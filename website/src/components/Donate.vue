<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
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
        <img src="../assets/donate/donate-background.png" class="img-fluid w-100 rounded" id="cropped-image" alt="Imagem Doação">
        <div class="overlay rounded"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h2 class="text-light">Pequeno Gesto,</h2>
          <h1 class="text-light">Grande Impacto</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <h1 class="text-esf text-center">Você pode fazer a diferença!</h1>
      <p>O <strong>ESF-RIO atua diretamente em comunidades em situação de vulnerabilidade social</strong>, criando possibilidades sustentáveis de desenvolvimento e conscientização ambiental. Ao prestar essa assistência, <strong>muda a realidade de várias famílias por meio dos nossos projetos</strong> - que promovem melhorias em diversos aspectos, <strong>principalmente na qualidade de vida das comunidades assistidas.</strong></p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h1 class="text-esf text-center">Um Pix de Solidariedade</h1>
      <div class="text-center mb-4">
        <img v-if="isMobile" src="../assets/donate/pix.png" class="img-fluid img-responsive w-50" alt="Imagem Pix">
        <img v-if="!isMobile" src="../assets/donate/pix.png" class="img-fluid img-responsive w-25" alt="Imagem Pix">
      </div>
      <div class="pt-4">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Nome da Associação</th>
              <th scope="col">CNPJ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ENGENHEIROS SEM FRONTEIRAS - RIO DE JANEIRO (ESF-RIO)</td>
              <td>39.474.296/0001-18</td>
            </tr>
          </tbody>
        </table>
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
