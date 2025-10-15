<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)
const activeIndex = ref<number | null>(null)

const faqs = ref([
  {
    pergunta: 'Como faço para ser voluntário?',
    resposta: [
      'Para ser um voluntário, o candidato precisa passar pelo processo seletivo.',
      'Os editais são abertos conforme as demandas dos projetos. Acompanhe nossas redes sociais.'
    ]
  },
  {
    pergunta: 'Quero ser um parceiro(a) do ESF-Rio. O que devo fazer?',
    resposta: [
      'Ficamos muito felizes com seu interesse. Para se envolver como parceiro do ESF-RIO, clique AQUI e siga todas as orientações.'
    ]
  },
  {
    pergunta: 'Quero doar para o ESF-Rio, como faço?',
    resposta: [
      'Ficamos muito felizes pois sua contribuição vai agregar muito em nossa organização.',
      'Para fazer uma doação, clique AQUI e apoie nossa vaquinha virtual.'
    ]
  },
  {
    pergunta: 'Quero fundar um núcleo em minha cidade, quais são as etapas?',
    resposta: [
      'Neste caso, você precisará ir até o site oficial dos Engenheiros Sem Fronteiras BRASIL, que é responsável pela gestão de todos os núcleos no território Brasileiro.'
    ]
  }
])

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 767
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>



<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <h2 class="text-center mb-0" style="color:rgba(29, 169, 122, 1)">F.A.Q.</h2>
      <p class="text-center mb-1" style="color:rgba(29, 169, 122, 1); font-size: 13px">Frequently Asked Questions</p>
      <p class="text-center" style="color:rgba(29, 169, 122, 1); font-size: 13px">Perguntas Frequentes</p>
    </div>
  </div>

  <div>
    <div v-for="(item, index) in faqs" :key="index" class="border" :class="{ 'border-top-0': index > 0 }">
      <div class="d-flex align-items-center p-3" style="cursor: pointer" @click="toggle(index)">
        <i :class="activeIndex === index ? 'fas fa-minus me-2' : 'fas fa-plus me-2'"></i>
        <a class="fw-semibold" style="color: rgb(51, 65, 85);">
          {{ item.pergunta }}
        </a>
      </div>

      <div v-show="activeIndex === index" class="border-top px-4 pb-3 pt-3" style="color: #334155; font-size: 16px;">
        <p v-for="(paragrafo, i) in item.resposta" :key="i" class="mb-2">
          {{ paragrafo }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
