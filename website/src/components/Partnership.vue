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
    <div class="row">
      <div class="col">
        <div class="esf-image-background rounded">
          <div class="overlay">
            <div class="row mb-4">
              <div class="col-md-4"></div>            
              <!-- ======= 'Solid background box' desktop (init) ======= -->
              <div v-if="!isMobile" class="col-md-6 esf-text-background">
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
              <!-- ======= 'Solid background box' desktop (end) ======= -->
              <!-- ======= 'Solid background box' responsive (init) ======= -->
              <div v-if="isMobile" class="col-8 mx-auto esf-text-background">
                <div>
                  <h1 class="text-center text-light fw-bold fs-3 mb-4">Quem pode ser um parceiro?</h1>
                  <p class="text-center text-light fs-5 mb-5">
                    Buscamos outras organizações e empresas, que alinhadas aos nossos ideais, possam forjar alianças sólidas com participações além-financeiras fundamentais para nossa organização.
                  </p>
                </div>
                <div>
                  <h1 class="text-center text-light fw-bold fs-3 mb-4">Como ser um parceiro?</h1>
                  <p class="text-center text-light fs-5 mb-4">
                    Envie sua proposta de parceria para o e-mail 
                    <span style="text-decoration: underline;"><strong>parcerias@esf-rio.org</strong></span>, 
                    detalhando seus objetivos e propósitos, ressaltando as possibilidades de sinergia entre as organizações.
                  </p>
                </div>
              </div>
              <!-- ======= 'Solid background box' responsive (end) ======= -->
              <div class="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>



<style scoped>
.esf-image-background {
  background-image: url("https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/esf-people.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  padding: 0;
}

.overlay {
  background-color: rgba(29, 169, 122, 0.6);
  padding: 2rem 0;
}

.esf-text-background {
  background-color: rgba(29, 169, 122, 1);
  padding: 2% 4%;
}


</style>
