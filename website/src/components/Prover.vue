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
    <div class="col text-center">
      <img src="../assets/prover/Logo-PROVER.png" class="img-fluid" style="width: 650px;" alt="Imagem Logo Prover" />
    </div>
  </div>


  <div class="prover-image-background rounded">
    <div class="overlay">
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
        <h1 class="text-light fs-3" :class="isMobile ? 'text-center' : 'text-start'">Propósito</h1>
        <div class="custom-divider my-4" :style="isMobile ? 'margin: 0 auto;' : ''" style="color: white"></div>
          <p class="text-light mb-4 py-1"  :class="isMobile ? 'text-center' : 'text-start'" style="font-size: 16px">
            Sabe-se que o início da globalização trouxe coisas positivas mas também muitas coisas negativas. Sua chegada acelerou o processo de exclusão social e esse fato tem feito a sociedade reagir como um todo, estimulando pessoas e organizações, engajadas em resolver problemas sociais, a buscar soluções que, no mínimo, atenuem os problemas das classes mais oprimidas.
          </p>
          <p class="text-light mb-4 py-1" :class="isMobile ? 'text-center' : 'text-start'" style="font-size: 16px">
            Nesse contexto, a “PROVER - Revista de Tecnologias Sociais” nasce com o propósito de dar destaque a pesquisas e trabalhos que visem solucionar ou, pelo menos, amenizar os problemas enfrentados pelas comunidades com menos recursos de nossa sociedade.
          </p>
          <p class="text-light mb-4 py-1" :class="isMobile ? 'text-center' : 'text-start'" style="font-size: 16px">
            A “PROVER - Revista de Tecnologias Sociais” pretende que os artigos aprovados tenham alinhamento com os Objetivos de Desenvolvimento Sustentável (ODS) e que instiguem a pesquisa de trabalhos que apresentem impacto social, inovação e sustentabilidade em concordância com os ODS.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col text-center">
      <img src="../assets/prover/845a5473-objetivos_port-768x484.png" class="img-fluid" style="width: 600px;" alt="Imagem Logo Prover" />
    </div>
  </div>

  <div class="prover-image-background rounded">
    <div class="overlay">
      <div class="row justify-content-center">
        <div class="col-11 col-md-10">
          <h1 class="text-light fs-3" :class="isMobile ? 'text-center' : 'text-start'">Objetivos De Desenvolvimento Sustentável</h1>
          <div class="custom-divider my-4" :style="isMobile ? 'margin: 0 auto;' : ''" style="color: white"></div>
          <p class="text-light mb-4 py-1" :class="isMobile ? 'text-center' : 'text-start'" style="font-size: 16px">
            Os 17 ODS buscam alcançar: erradicação da pobreza; fome zero; boa saúde e bem-estar; educação de qualidade; igualdade de género; água limpa e saneamento; energia acessível e limpa; emprego digno e crescimento econômico; indústria inovação e infraestrutura; redução das desigualdades; cidades e comunidades sustentáveis; consumo e produção responsáveis; combate às alterações climáticas; vida debaixo da água; vida sobre a terra; paz, justiça e instituições fortes e; parcerias em prol das metas.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mt-4">
    <div class="col-12 col-md-10">
      <h1 class="fs-3":class="isMobile ? 'text-center' : ''" style="color: rgba(29, 169, 122, 1);">Foco da Revista</h1>
      <div class="custom-divider my-4" :style="isMobile ? 'margin: 0 auto;' : ''" style="color: rgba(29, 169, 122, 1);"></div>
      <p class="mb-4 py-1" :class="isMobile ? 'text-center' : 'text-start'" style="font-size: 16px">
        Os temas da “PROVER – Revista de Tecnologias Sociais” abrangem artigos de impacto social, inovação e sustentabilidade em concordância com os Objetivos de Desenvolvimento Sustentável (ODS). De forma específica a revista focará em:
      </p>
      <ul class="ps-3 mb-5 " style="font-size: 16px;">
        <li class="mb-2"> <strong class="text-slate">ENERGIA SOLAR</strong> – Sistema Solar Fotovoltaico; ASBC (Aquecedor Solar de Baixo Custo); Biodigestor para Geração de Energia.</li>
        <li class="mb-2"> <strong class="text-slate">SANEAMENTO</strong> – Tratamento de Efluentes; Drenagem; Resíduos Sólidos e Controle de Vetores; Agrofloresta / Horta Solidária; Biofiltro.</li>
        <li class="mb-2"> <strong class="text-slate">MOBILIDADE URBANA</strong> – Mobilidade Urbana Sustentável; Ciclovias; Ferrovias; Acessibilidade; Participação Social; Promoção da Cidadania.</li>
        <li class="mb-2"> <strong class="text-slate">ENGENHARIA COMUNITÁRIA</strong> – Mobilização social; Óleos reversíveis (sabão ecológico); Educação ambiental; Dinâmicas de ciências.</li>
        <li class="mb-2"> <strong class="text-slate">HABITAÇÃO DE INTERESSE SOCIAL</strong> – Arquitetura; Estrutural; Reformas.</li>
        <li class="mb-2"> <strong class="text-slate">COMPUTAÇÃO</strong> – Desenvolvimento e implantação de aplicativos; Preparação de websites; Automatização de sistemas de processos.</li>
        <li class="mb-2"> <strong class="text-slate">ENGENHARIA HUMANITÁRIA</strong> – Geração de soluções que visem o atendimento de populações situadas em áreas de catástrofes e de populações vulneráveis.</li>
        <li class="mb-2"> <strong class="text-slate">ENGENHARIA DE SERVIÇOS</strong> – Abordagens de processos e serviços empresariais com vocação social. </li>
        <li class="mb-2"> <strong class="text-slate">ENGENHARIA DE PRODUÇÃO</strong> – Uso de ferramentas da Engenharia de Produção para solucionar problemas sociais.</li>
      </ul>
    </div>
  </div>

  <div class="prover-image-background-2 rounded">
    <div class="overlay">
      <div class="row justify-content-center">
        <div class="col-11 col-md-6">
          <h1 class="text-light fs-3" :class="isMobile ? 'text-center' : 'text-start'">Parceiros</h1>
          <div class="custom-divider my-4" :style="isMobile ? 'margin: 0 auto;' : ''" style="color: white"></div>
          <p class="text-light mb-4 py-1"
              :class="isMobile ? 'text-center' : 'text-start'"
              style="font-size: 16px">
            A “Prover – Revista de Tecnologias Sociais” surge da parceria entre o Projeto de Extensão PROVER aprovado pelo Departamento de Engenharia de Produção da Universidade Federal do Estado do Rio de Janeiro (UNIRIO) e a Associação Engenheiros Sem Fronteiras Núcleo Rio de Janeiro (ESF-RIO).
          </p>
        </div>
        <div class="col-11 col-md-4 text-center">
            <img src="../assets/prover/site-pagina-prover-parceiros-200-x-400-px-200-x-300-px.png" class="img-fluid" :class="isMobile ? 'd-block mx-auto mt-3' : ''" alt="Prover Partners">
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mt-4">
    <div class="col-12 col-md-10">
      <h1 class="fs-3" :class="isMobile ? 'text-center' : ''" style="color: rgba(29, 169, 122, 1);">Corpo Editorial</h1>
      <div class="custom-divider my-4" :style="isMobile ? 'margin: 0 auto;' : ''" style="color: rgba(29, 169, 122, 1);"></div>
      <ul class="ps-3 mb-5" style="font-size: 16px;">
        <li class="mb-2">Agamenon Oliveira – Escola Politécnica, Universidade Federal do Rio de Janeiro (UFRJ)</li>
        <li class="mb-2">Aliciane de Souza Peixoto – ONG Engenheiros sem Fronteiras – RJ (ESF-RIO), Universidade Veiga de Almeida (UVA)</li>
        <li class="mb-2">Annibal José Roris Rodriguez Scavarda do Carmo – Universidade Federal do Estado do Rio de Janeiro (UNIRIO)</li>
        <li class="mb-2">Aura Conci – Universidade Federal Fluminense (UFF)</li>
        <li class="mb-2">Cládice Nobile Diniz – Universidade Federal do Estado do Rio de Janeiro (UNIRIO)</li>
        <li class="mb-2">Clóvis Ricardo Montenegro de Lima – Instituto Brasileiro de Informação em Ciência e Tecnologia (IBICT)</li>
        <li class="mb-2">Fernanda de Souza Cardoso – Universidade Federal do Rio de Janeiro (UFRJ), Instituto Senai de Inovação em Biossintéticos (ISI)</li>
        <li class="mb-2">Francis Bogossian – Escola de Engenharia, Universidade Federal do Rio de Janeiro (UFRJ)</li>
        <li class="mb-2">Isis Rosa Nóbile Diniz – Coordenadora de Comunicação do Instituto de Energia e Meio Ambiente (IEMA)</li>
        <li class="mb-2">Jessica Rodrigues Pires da Silva – Instituto Alberto Luiz Coimbra de Pós-Graduação e Pesquisa de Engenharia (COPPE), Universidade Federal do Rio de Janeiro (UFRJ)</li>
        <li class="mb-2">Julia Celia Mercedes Strauch – Escola Nacional de Ciências Estatísticas (ENCE-IBGE), Universidade Federal Fluminense (UFF)</li>
        <li class="mb-2">Larissa Loureiro – Escola de Química, Universidade Federal do Rio de Janeiro (UFRJ)</li>
        <li class="mb-2">Marcos Pereira Estellita Lins – Universidade Federal do Estado do Rio de Janeiro (UNIRIO)</li>
        <li class="mb-2">Miguel Antonio Pinho Bruno – Escola Nacional de Ciências Estatísticas (ENCE-IBGE), Universidade do Estado do Rio de Janeiro (UERJ), Faculdade Mackenzie Rio</li>
      </ul>
    </div>
  </div>


</template>

<style scoped>

.prover-image-background {
  background-image: url("../assets/prover/site-titulos-das-paginas.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  padding: 0;
}

.prover-image-background-2 {
  background-image: url("../assets/prover/site-corpo-das-paginas-1.png");
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
  background-color: rgba(29, 169, 122, 0.5); /* Overlay semi-transparente */
  padding: 2rem 0;
}

</style>
