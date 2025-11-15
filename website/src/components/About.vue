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
        <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/esf-people.jpg" class="img-fluid w-100 rounded" id="cropped-image" alt="Imagem Grupo de voluntários">
        <div class="overlay rounded"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 class="text-light">Inspirando pessoas,</h1>
          <h1 class="text-light">construindo o futuro!</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- ======= 'Quem Somos' desktop (init) ======= -->
  <div v-if="!isMobile" class="row mb-4">
    <div class="col">
      <h1 class="text-esf">Quem Somos</h1>
      <p>O<strong> Núcleo do Rio de Janeiro</strong>, ou<strong> ESF-Rio</strong>, foi fundado em 2014 e tem como objetivo o <strong>desenvolvimento de projetos junto as comunidades / famílias em vulnerabilidade social&nbsp; </strong>de nosso município e/ou de municípios vizinhos, buscando qualidade de vida para a população, incentivo à formação de futuros engenheiros, educação ambiental, a conservação, preservação e recuperação do meio ambiente e aumento das áreas verdes das cidades, além de trazer o <strong>conhecimento prático para os alunos envolvidos</strong>, unindo sempre a excelência do ensino, a pesquisa e extensão universitária, a ética e o respeito ao próximo.</p>
    </div>
    <div class="col text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/quem-somos.png" class="img-fluid border border-esf border-4 rounded" alt="Imagem Projeto Virada Sustentável" width="300" height="300">
    </div>
  </div>
  <!-- ======= 'Quem Somos' desktop (end) ======= -->
  <!-- ======= 'Quem Somos' responsive (init) ======= -->
  <div v-if="isMobile" class="row mb-4">
      <h1 class="text-esf">Quem Somos</h1>
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/quem-somos.png" class="img-fluid img-responsive" id="cropped-image" alt="Imagem Grupo de voluntários">
      <p>O<strong> Núcleo do Rio de Janeiro</strong>, ou<strong> ESF-Rio</strong>, foi fundado em 2014 e tem como objetivo o <strong>desenvolvimento de projetos junto as comunidades / famílias em vulnerabilidade social&nbsp; </strong>de nosso município e/ou de municípios vizinhos, buscando qualidade de vida para a população, incentivo à formação de futuros engenheiros, educação ambiental, a conservação, preservação e recuperação do meio ambiente e aumento das áreas verdes das cidades, além de trazer o <strong>conhecimento prático para os alunos envolvidos</strong>, unindo sempre a excelência do ensino, a pesquisa e extensão universitária, a ética e o respeito ao próximo.</p>
  </div>
  <!-- ======= 'Quem Somos' responsive (end) ======= -->

  <!-- ======= 'Missão' desktop (init) ======= -->
  <div v-if="!isMobile" class="row mb-4">
    <div class="col text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/missao.png" class="img-fluid border border-esf border-4 rounded" alt="Imagem Projeto E Tá Nóis" width="300" height="300">
    </div>
    <div class="col">
      <h1 class="text-esf">Missão</h1>
      <p>Promover o desenvolvimento de comunidades / famílias em vulnerabilidade social por meio de <strong>projetos sustentáveis de engenharia</strong>, de forma colaborativa, proporcionando transferência tecnológica e troca de saberes, bem como <strong>estimular a formação e desenvolvimento de profissionais motivados</strong>, capazes de atuar em grupo de modo efetivo para a <strong>solução de problemas reais e com forte consciência do impacto social</strong> das suas atividade</p>
    </div>
  </div>
  <!-- ======= 'Missão' desktop (end) ======= -->
  <!-- ======= 'Missão' responsive (init) ======= -->
  <div v-if="isMobile" class="row mb-4">
      <h1 class="text-esf">Missão</h1>
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/missao.png" class="img-fluid img-responsive" id="cropped-image" alt="Imagem Grupo de voluntários">
      <p>Promover o desenvolvimento de comunidades / famílias em vulnerabilidade social por meio de <strong>projetos sustentáveis de engenharia</strong>, de forma colaborativa, proporcionando transferência tecnológica e troca de saberes, bem como <strong>estimular a formação e desenvolvimento de profissionais motivados</strong>, capazes de atuar em grupo de modo efetivo para a <strong>solução de problemas reais e com forte consciência do impacto social</strong> das suas atividade</p>
  </div>
  <!-- ======= 'Missão' responsive (end) ======= -->

  <!-- ======= 'Visão' desktop (init) ======= -->
  <div v-if="!isMobile" class="row mb-4">
    <div class="col">
      <h1 class="text-esf">Visão</h1>
      <p>Tornar-se uma organização não governamental que seja <strong>referência nacional,</strong> a partir de esforços e comprometimento do nosso corpo de colaboradores, proporcionando um alto impacto socioambiental e possibilitando que as comunidades / famílias em vulnerabilidade social possam atingir suas necessidades básicas de maneira sustentável.</p>
    </div>
    <div class="col text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/visao.png" class="img-fluid border border-esf border-4 rounded" alt="Imagem Voluntário" width="300" height="300">
    </div>
  </div>
  <!-- ======= 'Visão' desktop (init) ======= -->
  <!-- ======= 'Visão' responsive (init) ======= -->
  <div v-if="isMobile" class="row mb-4">
      <h1 class="text-esf">Missão</h1>
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/visao.png" class="img-fluid img-responsive" id="cropped-image" alt="Imagem Grupo de voluntários">
      <p>Tornar-se uma organização não governamental que seja <strong>referência nacional,</strong> a partir de esforços e comprometimento do nosso corpo de colaboradores, proporcionando um alto impacto socioambiental e possibilitando que as comunidades / famílias em vulnerabilidade social possam atingir suas necessidades básicas de maneira sustentável.</p>
  </div>
  <!-- ======= 'Visão' responsive (end) ======= -->

  <div class="row mb-4">
    <div class="col text-center">
      <h1 class="text-esf">Valores</h1>
    </div>
  </div>
  <!-- ======= 'Valores' desktop (init) ======= -->
  <div class="row" v-if="!isMobile">
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/valores-1.png" class="img-fluid" alt="Valor Responsabilidade Social" width="200" height="200">
    </div>
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/valores-2.png" class="img-fluid" alt="Valor Sustentabilidade" width="200" height="200">
    </div>
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/valores-3.png" class="img-fluid" alt="Valor Transparência" width="200" height="200">
    </div>
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/valores-4.png" class="img-fluid" alt="Valor Comprometimento" width="200" height="200">
    </div>
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/valores-5.png" class="img-fluid" alt="Valor Ética" width="200" height="200">
    </div>
  </div>
  <!-- ======= 'Valores' desktop (end) ======= -->
  <!-- ======= Valores responsive (init) ======= -->
  <div class="row d-flex justify-content-center" v-if="isMobile">
    <div class="col-4">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/valores-1.png" class="img-fluid" alt="Valor Responsabilidade Social" width="200" height="200">
    </div>
    <div class="col-1">
      <!-- dummy -->
    </div>
    <div class="col-4">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/valores-2.png" class="img-fluid" alt="Valor Sustentabilidade" width="200" height="200">
    </div>
  </div>
  <div class="row" v-if="isMobile">
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/valores-3.png" class="img-fluid" alt="Valor Transparência" width="200" height="200">
    </div>
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/valores-4.png" class="img-fluid" alt="Valor Comprometimento" width="200" height="200">
    </div>
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/valores-5.png" class="img-fluid" alt="Valor Ética" width="200" height="200">
    </div>
  </div>
  <!-- ======= Valores responsive (end) ======= -->

  <div class="row mt-5">
    <div class="col text-center">
      <h1 class="text-esf">Linhas de Projetos</h1>
    </div>
  </div>
  <div class="row mt-4 text-center">
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/linha-projeto1.png" class="img-fluid" alt="Valor Responsabilidade Social" width="200" height="200">
    </div>
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/linha-projeto2.png" class="img-fluid" alt="Valor Sustentabilidade" width="200" height="200">
    </div>
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/linha-projeto3.png" class="img-fluid" alt="Valor Transparência" width="200" height="200">
    </div>
  </div>
  <div class="row text-center">
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/linha-projeto4.png" class="img-fluid" alt="Valor Responsabilidade Social" width="200" height="200">
    </div>
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/linha-projeto5.png" class="img-fluid" alt="Valor Sustentabilidade" width="200" height="200">
    </div>
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/about/linha-projeto6.png" class="img-fluid" alt="Valor Transparência" width="200" height="200">
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
