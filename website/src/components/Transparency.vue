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
        <img src="../assets/transparency/background.jpg" class="img-fluid w-100 rounded" id="cropped-image" alt="Imagem Grupo de voluntários">
        <div class="overlay rounded"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 class="text-light">Transparência</h1>
        </div>
      </div>
    </div>
  </div>

  <!-- ======= 'Quem Somos' desktop (init) ======= -->
  <!-- <div v-if="!isMobile" class="row mb-4"> -->
  <div class="row mb-4">
    <div class="col">
        <p>O<strong> Engenheiros Sem Fronteiras Núcleo Rio de Janeiro</strong> é uma organização da sociedade civil, sem fins lucrativos, que trabalha para <strong>transformar o mundo por meio da engenharia.</strong></p>
        <p>Nesta página, <strong>apresentaremos documentos que prestam contas à sociedade</strong>, de forma a demonstrar toda a nossa <strong>ética e profissionalismo</strong> na realização das atividades.</p>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="text-esf">Fundação <i class="bi bi-linkedin esf-icon"></i> </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href="/transparency/Ata-de-Fundacao.pdf" class="card-link">Ata de fundação (PDF)</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="text-esf">Estatuto <i class="bi bi-linkedin esf-icon"></i> </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href="/transparency/Estatuto-Social.pdf" class="card-link">Estatuto Social (PDF)</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="text-esf">Ato Normativo <i class="bi bi-linkedin esf-icon"></i> </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href="/transparency/ANC012025_Ato Normativo Conjunto membresia 24-25.pdf" class="card-link">Ato Normativo Conjunto nº1 29/01/2025 (PDF)</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="text-esf">Certidões <i class="bi bi-linkedin esf-icon"></i> </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href="/transparency/Registro-CNPJ-2022.pdf" class="card-link">Registro do CNPJ (PDF)</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="text-esf">Assembléia Geral <i class="bi bi-linkedin esf-icon"></i> </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href="#" class="card-link">Assembléia Geral Ordinária - 25/01/2020 (PDF)</a></li>
            <li class="list-group-item"><a href="#" class="card-link">Assembléia Geral Extraordinária - 29/08/2020 (PDF)</a></li>
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

.border-esf {
  border-color: rgba(29, 169, 122, 1.0) !important;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 169, 122, 0.8);
}

.img-responsive {
  object-fit: none;
  object-position: center;
  width: 100%;
  max-height: 160px;
  margin-bottom: 1rem;
  border-radius: 5%;
}
</style>
