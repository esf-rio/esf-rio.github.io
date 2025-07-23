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
  

  <div class="row">
    <div class="col">
      <div class="cover-image-background rounded">
        <div class="overlay">
          <div class="row justify-content-center">
            <div class="col-11 col-md-10">
              <h3 class="text-light mb-4 mt-4 py-1"  :class="isMobile ? 'text-center' : 'text-center'">
              ESF-RIO contra o COVID-19
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mt-4">
    <div class="col-12 col-md-6 mb-4">
          <h2 style="color:rgba(29, 169, 122, 1)">Projeto de produção e distribuição de</h2>
          <h1 class="mb-4" style="color:rgba(29, 169, 122, 1)">GEL ANTISSÉPTICO</h1>
          <p class="mb-4" style="font-size: 16px; text-align: justify;">Como medida de prevenção ao Coronavírus (COVID-19), as instituições internacionais, federais e estaduais recomendam a higienização das mãos com frequência com água e sabão ou álcool em gel. Entretanto, grande parte da população que vive em quilombos e comunidades, assim como outras em outras áreas de vulnerabilidade, apresentam elevada concentração populacional e têm acesso precário à água potável e produtos de higiene, dificultando assim a prevenção. Além disso, o álcool em gel encontrava-se escasso no mercado devido à grande procura pelo produto e à falta do espessante carbopol no cenário mundial, e quando encontrado, muitas vezes, o preço estava acima da média, deixando muitas pessoas sem acesso ao produto.</p>
          <p class="" style="font-size: 16px;text-align: justify;"><strong>Com isso, nasceu o projeto E TÁ NÓIS, que visou a produção de um gel antisséptico alternativo ao álcool gel 70%, promovido pela OMS e ANVISA, bem como sua distribuição entre famílias em situação de vulnerabilidade social dos quilombos e comunidades cariocas.</strong></p>
        </div>
        <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <img src="../assets/covid/ETANOIS-03-1024x1008.png" class="img-fluid" width="350" alt="Imagem Logo Prover" />
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div class="covid-image-background rounded">
        <div class="overlay">
          <div class="row justify-content-center">
            <div class="col-12 col-md-5">
              <h1 class="text-light fs-2" :class="isMobile ? 'text-center' : 'text-start'">Objetivo</h1>
              <div class="custom-divider my-4" :style="isMobile ? 'margin: 0 auto;' : ''" style="color: white"></div>
              <p class="text-light mb-4 py-1 " :class="isMobile ? 'text-center px-3' : ''" style="font-size: 16px; text-align: justify;">
              O objetivo deste projeto foi produzir e distribuir, em comunidades em vulnerabilidade social, o álcool glicerinado, um gel antisséptico alternativo ao álcool gel 70% que é promovido pela Organização Mundial da Saúde (OMS) e pela ANVISA.
              </p>
              <p class="text-light mb-4 py-1" :class="isMobile ? 'text-center px-3' : ''" style="font-size: 16px; text-align: justify;">
                Foi aplicada a metodologia de produção de gel antisséptico recomendada pela OMS e pela ANVISA, bem como seu controle de qualidade, em laboratórios parceiros e certificados para trabalhar com substâncias químicas. O produto gerado foi embalado em frascos, selecionados de maneira a se diferenciarem de um produto alimentício, além de rotulados e armazenados de acordo com as normas da ANVISA e OMS antes de serem embalados e entregues às ONGs responsáveis pela distribuição.
              </p>
            </div>
            <div class="col-12 col-md-5 d-flex justify-content-md-end justify-content-center align-items-center">
              <div class="bg-white rounded p-4 w-75">
                <div class="custom-divider my-3 mx-auto" style="color: #334155"></div>
                <div class="ratio ratio-16x9">
                  <video class="elementor-video" style="width: 100%; height: 100%;" controls="true" src="../assets/covid/[CATARSE] E ta nóis contra o corona!_20250723_000856.mp4"  preload="metadata" controlslist="nodownload" poster="../assets/covid/ETANOIS-03-1024x1008.png"></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mt-4">
    <div class="col-12 col-md-6 mb-4 mt-1">
          <h2 style="color:rgba(29, 169, 122, 1)">Apoio Financeiro e Parceiros</h2>
          <h1 class="mb-4" style="color:rgba(29, 169, 122, 1)">(Trabalho em Rede)</h1>
          <p class="mb-4" style="font-size: 16px; text-align: justify;">Para o desenvolvimento deste projeto de maneira eficaz e de acordo com as normas da OMS e Anvisa, foi desenvolvido um trabalho em rede com diversos parceiros e apoios logísticos. Parte das matérias-primas foi obtida através da doação do <strong>Instituto SENAI de Inovação em Biossintéticos e Fibras</strong>, enquanto o restante das matérias-primas e os frascos foram adquiridos através do valor angariado através de doações e edital. Até o momento obtivemos doações através de vaquinha online pelo Catarse (R$2.000,00), doações diretas (R$1.300,00) e fomos selecionados pelo edital de apoio Emergencial contra o coronavírus do Fundo Baobá para Equidade Racial (R$2.500,00).</p>
          <p class="mb-4" style="font-size: 16px; text-align: justify;">Estas matérias-primas e frascos foram enviadas ao nosso parceiro, o <strong>Laboratório de Termodinâmica Molecular e Aplicada</strong> da Universidade Estadual do Rio de Janeiro, responsável pela produção do gel antisséptico de acordo com as normas da OMS e Anvisa. Após a embalagem e rotulagem do produto final, este foi distribuído por ONGs pertencentes às comunidades mais afetadas pelo COVID-19 entre as famílias mais vulneráveis. Estas ONGs que deram todo o apoio logístico e de registro foram identificadas pela <strong>Comcat</strong>, uma ONG parceira.</p>
          <p class="mb-4" style="font-size: 16px; text-align: justify;">As primeiras ONGs com as quais atumos foram: a Associação Beneficente AMAR (comunidades na região do Grajaú e Duque de Caxias), Associação Cultural do Quilombo do Camorim (ACUQCA) (Quilombo do Camorim), Cooperativa Transvida (Complexo da Penha) e Frente de Mobilização da Maré (Complexo da Maré).</p>
     
    </div>
    <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <img src="../assets/covid/Kit_Logo_Etanois_vertical-X-ESF-Rio.png" class="img-fluid" width="250" alt="Imagem Logo Prover" />
    </div>
  </div>

  <div class="row justify-content-center rounded" style="background-color: #1DA879">
    <div class="col-md-7 mb-5 mt-1">
      <h1 class="fs-1 text-light mt-5">E tá nóis contra o corona!</h1>
      <p class="text-light">Para saber mais sobre o projeto e fazer a sua doação, acompanhe nosso instagram.</p>
    </div>
    <div class="col-md-3 mb-5 mt-5 d-flex justify-content-center align-items-center">
      <a href="https://www.instagram.com/esf.riodejaneiro" target="_blank" class="btn btn-outline-light d-flex align-items-center gap-2 px-4 py-2 text-uppercase rounded" style="font-weight: 500; border-width: 3px;">
      <i class="fab fa-instagram"></i>Saiba mais aqui
      </a>
    </div>
  </div>

  <div class="row justify-content-center mt-4">
    <div class="col-md-10 mb-4 mt-1">
      <h1 style="color:rgba(29, 169, 122, 1)">Galeria de Fotos</h1>
      <h2 class="mb-4 fw-light" style="color:rgba(29, 169, 122, 1)"><strong>Produção</strong></h2>

      <div class="row">
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/producao/1-1-1024x1024.png" class="img-fluid" alt="Foto 1">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/producao/2-1-1024x1024.png" class="img-fluid" alt="Foto 2">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/producao/3-1-1024x1024.png" class="img-fluid" alt="Foto 3">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/producao/4-1-1024x1024.png" class="img-fluid" alt="Foto 4">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/producao/5-1-1024x1024.png" class="img-fluid" alt="Foto 5">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/producao/6-1-1024x1024.png" class="img-fluid" alt="Foto 6">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/producao/7-1-1024x1024.png" class="img-fluid" alt="Foto 7">
        </div>
        <div class="col-6 col-md-3 mb-5">
          <img src="../assets/covid/producao/8-1-1024x1024.png" class="img-fluid" alt="Foto 8">
        </div>
      </div>
      <h2 class="mb-4 fw-light " style="color:rgba(29, 169, 122, 1)"><strong>Distribuição</strong></h2>

      <div class="row">
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/distribuicao/1-1024x1024.png" class="img-fluid" alt="Foto 1">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/distribuicao/2-1024x1024.png" class="img-fluid" alt="Foto 2">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/distribuicao/3-1024x1024.png" class="img-fluid" alt="Foto 3">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/distribuicao/4-1024x1024.png" class="img-fluid" alt="Foto 4">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/distribuicao/5-1024x1024.png" class="img-fluid" alt="Foto 5">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/distribuicao/6-1024x1024.png" class="img-fluid" alt="Foto 6">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/distribuicao/7-1024x1024.png" class="img-fluid" alt="Foto 7">
        </div>
        <div class="col-6 col-md-3 mb-3">
          <img src="../assets/covid/distribuicao/8-1024x1024.png" class="img-fluid" alt="Foto 8">
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.cover-image-background {
  background-image: url("../assets/covid/CAPACOVID_Prancheta-1.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  padding: 0;
}

.covid-image-background {
  background-image: url("../assets/covid/CAPACOVID_Prancheta-1.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  padding: 0;
}

.custom-divider {
 border-top: 1px solid;
  width: 15%;                                
  opacity: 0.8;            
}

.text-slate {
  color: #334155;
}


.overlay {
  background-color: rgba(29, 169, 122, 0.5); 
  padding: 2rem 0;
}
</style>
