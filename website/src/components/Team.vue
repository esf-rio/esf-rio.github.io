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
        <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/team-background.jpg" class="img-fluid w-100 rounded" id="cropped-image" alt="Imagem Equipe">
        <div class="overlay rounded"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 class="text-light">Equipe</h1>
        </div>
      </div>
    </div>
  </div>

  <div v-if="!isMobile" class="row g-1 mt-5">
    <div class="col-custom">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/Esf_Filipe_New-1024x1024.png" class="img-fluid" alt="Filipe Amaral, Diretor Geral">
    </div>
    <div class="col-custom">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/Esf_Cladice_New-1024x1024.png" class="img-fluid" alt="Cládice Diniz, Vice-Diretora">
    </div>
    <div class="col-custom">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/Esf_Roberta_New-1024x1024.png" class="img-fluid" alt="Roberta Meziat, Diretora Financeira">
    </div>
    <div class="col-custom">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/Esf_Ane_New-1024x1024.png" class="img-fluid" alt="Ane Peixoto, Diretora de Comunicação e Marketing">
    </div>
    <div class="col-custom">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/Esf_Camilla_New-1024x1024.png" class="img-fluid" alt="Camilla Nascimento, Diretora de Projetos">
    </div>
  </div>

  <div v-if="isMobile" class="row g-1 mt-5">
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/Esf_Filipe_New-1024x1024.png" class="img-fluid" alt="Foto 1">
    </div>
  </div>
  <div v-if="isMobile" class="row g-1 mt-5">
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/Esf_Cladice_New-1024x1024.png" class="img-fluid" alt="Foto 2">
    </div>
  </div>
  <div v-if="isMobile" class="row g-1 mt-5">
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/Esf_Roberta_New-1024x1024.png" class="img-fluid" alt="Foto 3">
    </div>
  </div>
  <div v-if="isMobile" class="row g-1 mt-5">
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/Esf_Ane_New-1024x1024.png" class="img-fluid" alt="Foto 4">
    </div>
  </div>
  <div v-if="isMobile" class="row g-1 mt-5">
    <div class="col">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/Esf_Camilla_New-1024x1024.png" class="img-fluid" alt="Foto 5">
    </div>
  </div>

  <div class="text-success">
    <hr>
  </div>

  <div v-if="!isMobile" class="row mt-5">
    <div class="col-4 text-center d-flex align-items-center justify-content-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/diretoria_geral.png" class="w-50 rounded-circle" alt="Imagem Diretoria Geral">
    </div>
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          A Diretoria Geral é responsável pela convocação e coordenação das Assembleias Gerais da organização e das reuniões da Diretoria Executiva, além de cumprir e garantir o cumprimento do Estatuto e Regimento Interno do núcleo ESF Rio de Janeiro. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">A organização da estrutura funcional do núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Abre e movimenta as contas bancárias do núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Propõe os Regimentos Internos juntamente com os demais membros da Diretoria Executiva;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Busca o desenvolvimento de parcerias para auxílio nos projetos do núcleo ESF Rio de Janeiro;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col mb-2">Mantém estreitos os contatos com outras associações, fundações, instituições de ensino superior e outros núcleos dos Engenheiros Sem Fronteiras no Brasil e no exterior.</p>
      </div>
      <p class="fs-6 lh-sm">
        <strong>
          A Vice Diretoria Geral é responsável por substituir o(a) Diretor(a) Geral em seu impedimento. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Efetuar a programação anual das atividades e acompanhá-las;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Promover auditoria de projetos;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Analisar os relatórios contábeis e sugerir melhorias em processos administrativos.</p>
      </div>
    </div>
  </div>

  <div v-if="isMobile"  class="row mt-5 d-flex justify-content-center">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/diretoria_geral.png" class="w-100 rounded-circle" alt="Imagem Diretoria Geral">
    </div>
  </div>
  <div v-if="isMobile"  class="row mt-5">
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          A Diretoria Geral é responsável pela convocação e coordenação das Assembleias Gerais da organização e das reuniões da Diretoria Executiva, além de cumprir e garantir o cumprimento do Estatuto e Regimento Interno do núcleo ESF Rio de Janeiro. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">A organização da estrutura funcional do núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Abre e movimenta as contas bancárias do núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Propõe os Regimentos Internos juntamente com os demais membros da Diretoria Executiva;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Busca o desenvolvimento de parcerias para auxílio nos projetos do núcleo ESF Rio de Janeiro;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col mb-2">Mantém estreitos os contatos com outras associações, fundações, instituições de ensino superior e outros núcleos dos Engenheiros Sem Fronteiras no Brasil e no exterior.</p>
      </div>
      <p class="fs-6 lh-sm">
        <strong>
          A Vice Diretoria Geral é responsável por substituir o(a) Diretor(a) Geral em seu impedimento. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Efetuar a programação anual das atividades e acompanhá-las;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Promover auditoria de projetos;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Analisar os relatórios contábeis e sugerir melhorias em processos administrativos.</p>
      </div>
    </div>
  </div>

  <div class="text-success">
    <hr>
  </div>

  <div v-if="!isMobile" class="row mt-5">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/gestao_pessoas.png" class="w-50 rounded-circle" alt="Imagem Gestão de Pessoas">
    </div>
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          A Diretoria de Gestão de Pessoas é responsável por desenvolver a cultura organizacional do núcleo. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Acompanhar e desenvolver os membros por meio de capacitação e trabalhos de motivação;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Planejar e coordenar os processos seletivos do núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Manter atualizado o cadastro de membros.</p>
      </div>
    </div>
  </div>

  <div v-if="isMobile"  class="row mt-5 d-flex justify-content-center">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/gestao_pessoas.png" class="w-100 rounded-circle" alt="Imagem Gestão de Pessoas">
    </div>
  </div>
  <div v-if="isMobile"  class="row mt-5">
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          A Diretoria de Gestão de Pessoas é responsável por desenvolver a cultura organizacional do núcleo. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Acompanhar e desenvolver os membros por meio de capacitação e trabalhos de motivação;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Planejar e coordenar os processos seletivos do núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Manter atualizado o cadastro de membros.</p>
      </div>
    </div>
  </div>

  <div class="text-success">
    <hr>
  </div>

  <div v-if="!isMobile" class="row mt-5">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/projetos.png" class="w-50 rounded-circle" alt="Imagem Projetos">
    </div>
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          A Diretoria de Projetos é responsável pela coordenação dos Gerentes das Linhas de Projetos e o acompanhamento de todas as suas fases. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Controlar a documentação dos projetos concluídos e em andamento;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Captar novos projetos para o núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Promover auditoria dos projetos em conjunto com a Vice Diretoria Geral;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Garantir a adequação da execução de projetos às leis vigentes;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Trabalhar em conjunto com a Diretoria Executiva para recrutar membros para participar dos projetos do núcleo ESF-RIO.</p>
      </div>
    </div>
  </div>

  <div v-if="isMobile"  class="row mt-5 d-flex justify-content-center">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/projetos.png" class="w-100 rounded-circle" alt="Imagem Projetos">
    </div>
  </div>
  <div v-if="isMobile"  class="row mt-5">
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          A Diretoria de Projetos é responsável pela coordenação dos Gerentes das Linhas de Projetos e o acompanhamento de todas as suas fases. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Controlar a documentação dos projetos concluídos e em andamento;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Captar novos projetos para o núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Promover auditoria dos projetos em conjunto com a Vice Diretoria Geral;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Garantir a adequação da execução de projetos às leis vigentes;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Trabalhar em conjunto com a Diretoria Executiva para recrutar membros para participar dos projetos do núcleo ESF-RIO.</p>
      </div>
    </div>
  </div>

  <div class="text-success">
    <hr>
  </div>

  <div v-if="!isMobile" class="row mt-5">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/comunicacao_marketing.png" class="w-50 rounded-circle" alt="Imagem Diretoria Geral">
    </div>
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          A Diretoria de Comunicação e Marketing é responsável pelo planejamento e coordenação das estratégias de comunicação e divulgação do núcleo ESF-Rio e de seus projetos, assim como pela elaboração e fornecimento de padrões de materiais de divulgação e artes gráficas, e por zelar pela imagem da organização seguindo os padrões estabelecidos pela sede (ESF Brasil) e pelos normativos internos. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Criar e manter registro fotográfico de reuniões, projetos, treinamentos e demais eventos;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Publicar notícias das atividades do núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Encaminhar as deliberações das Assembleias Gerais, juntamente com a Diretoria Geral;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Comunicar a prestação de contas dos trabalhos efetuados juntamente com a Diretoria Financeira;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Promover a divulgação dos trabalhos do núcleo ESF Rio de Janeiro para a população em geral.</p>
      </div>
    </div>
  </div>

  <div v-if="isMobile"  class="row mt-5 d-flex justify-content-center">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/comunicacao_marketing.png" class="w-100 rounded-circle" alt="Imagem Diretoria Geral">
    </div>
  </div>
  <div v-if="isMobile"  class="row mt-5">
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          A Diretoria de Comunicação e Marketing é responsável pelo planejamento e coordenação das estratégias de comunicação e divulgação do núcleo ESF-Rio e de seus projetos, assim como pela elaboração e fornecimento de padrões de materiais de divulgação e artes gráficas, e por zelar pela imagem da organização seguindo os padrões estabelecidos pela sede (ESF Brasil) e pelos normativos internos. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Criar e manter registro fotográfico de reuniões, projetos, treinamentos e demais eventos;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Publicar notícias das atividades do núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Encaminhar as deliberações das Assembleias Gerais, juntamente com a Diretoria Geral;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Comunicar a prestação de contas dos trabalhos efetuados juntamente com a Diretoria Financeira;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Promover a divulgação dos trabalhos do núcleo ESF Rio de Janeiro para a população em geral.</p>
      </div>
    </div>
  </div>

  <div class="text-success">
    <hr>
  </div>

  <div v-if="!isMobile" class="row mt-5">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/gestao_estrategica_processos.png" class="w-50 rounded-circle" alt="Imagem Diretoria Geral">
    </div>
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          	A Diretoria de Gestão Estratégica e Processos é responsável por auxiliar a Diretoria Geral na definição das bases estratégicas e objetivos do núcleo ESF Rio de Janeiro, promovendo a melhoria contínua nos processos de apoio e de negócios da organização. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Padronizar as metodologias e documentos aplicados nos projetos executados pela organização;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Apoiar a Diretoria de Gestão de Pessoas na definição dos perfis funcionais dos voluntários;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Promover treinamentos relativos às competências de Gestão de Projetos;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Promover melhorias contínuas e controlar os processos de apoio e de negócios garantindo aderência aos padrões definidos pela organização.</p>
      </div>
    </div>
  </div>

  <div v-if="isMobile"  class="row mt-5 d-flex justify-content-center">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/gestao_estrategica_processos.png" class="w-100 rounded-circle" alt="Imagem Diretoria Geral">
    </div>
  </div>
  <div v-if="isMobile"  class="row mt-5">
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          	A Diretoria de Gestão Estratégica e Processos é responsável por auxiliar a Diretoria Geral na definição das bases estratégicas e objetivos do núcleo ESF Rio de Janeiro, promovendo a melhoria contínua nos processos de apoio e de negócios da organização. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Padronizar as metodologias e documentos aplicados nos projetos executados pela organização;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Apoiar a Diretoria de Gestão de Pessoas na definição dos perfis funcionais dos voluntários;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Promover treinamentos relativos às competências de Gestão de Projetos;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Promover melhorias contínuas e controlar os processos de apoio e de negócios garantindo aderência aos padrões definidos pela organização.</p>
      </div>
    </div>
  </div>

  <div class="text-success">
    <hr>
  </div>

  <div v-if="!isMobile" class="row mt-5">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/financeiro.png" class="w-50 rounded-circle" alt="Imagem Diretoria Geral">
    </div>
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          		A Diretoria Financeira é responsável pelo controle financeiro do ESF-Rio. Tem por missão cuidar da saúde financeira da instituição através do registro de entradas e saídas de caixa. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Arrecadar e contabilizar as contribuições, rendas, auxílios e donativos;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Prestar contas do exercício presente até o último dia da gestão em Assembleia Geral;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Abrir e movimentar contas bancárias juntamente com a Diretoria Geral;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Coordenar as atividades de captação de recursos do núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Apresentar ao Conselho Fiscal os livros de escrituração do núcleo ESF Rio de Janeiro;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Garantir transparência dos resultados apurados e o cumprimento da ética profissional contábil.</p>
      </div>
    </div>
  </div>

  <div v-if="isMobile"  class="row mt-5 d-flex justify-content-center">
    <div class="col-4 text-center">
      <img src="https://media.githubusercontent.com/media/esf-rio/esf-rio.github.io/main/website/src/assets/team/financeiro.png" class="w-100 rounded-circle" alt="Imagem Diretoria Geral">
    </div>
  </div>
  <div v-if="isMobile"  class="row mt-5">
    <div class="col">
      <p class="fs-6 lh-sm mb-2">
        <strong>
          		A Diretoria Financeira é responsável pelo controle financeiro do ESF-Rio. Tem por missão cuidar da saúde financeira da instituição através do registro de entradas e saídas de caixa. Detém como funções principais:
        </strong>
      </p>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Arrecadar e contabilizar as contribuições, rendas, auxílios e donativos;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Prestar contas do exercício presente até o último dia da gestão em Assembleia Geral;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Abrir e movimentar contas bancárias juntamente com a Diretoria Geral;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Coordenar as atividades de captação de recursos do núcleo;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Apresentar ao Conselho Fiscal os livros de escrituração do núcleo ESF Rio de Janeiro;</p>
      </div>
      <div class="row">
        <i class="col-1 text-end bi bi-check-lg" style="color: #1da97a;"></i>
        <p class="col m-0">Garantir transparência dos resultados apurados e o cumprimento da ética profissional contábil.</p>
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

.col-custom {
  max-width: 20%;
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
