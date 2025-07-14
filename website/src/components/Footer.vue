<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  
  let currentYear = new Date().getFullYear()
  const footerContainer = ref<HTMLElement | null>(null);
  let footerPaddingTop = ref<number>(0);

  const calculateFooterDistanceToBottom = () => {
    const bodyHeight = document.body.scrollHeight;
    const mainHeight = document.querySelector('main');

    if (mainHeight) {
      const distance = bodyHeight - mainHeight.offsetHeight - footerPaddingTop.value;;
      if (distance != 0) {
        footerPaddingTop.value = distance;
      }
      console.log('padding:', distance);
    }
  };

  onMounted(async () => {
    const resizeObserver = new ResizeObserver(() => {
      calculateFooterDistanceToBottom();
    });
    const mainElement = document.querySelector('main');
    if (mainElement) {
      resizeObserver.observe(mainElement);
    }
  });
</script>

<template>
  <div ref="footerContainer" class="footer-container" :style="{ 'padding-top': footerPaddingTop + 'px' }">
    <footer class="background-esf text-white text-center py-3">
      <p>&copy; {{ currentYear }} Engenheiros Sem Fronteiras Núcleo Rio de Janeiro | All Rights Reserved</p>
      <p>CNPJ 39.474.296/0001-18</p>
      <p>
        <a href="#" class="text-white text-decoration-none">Política de Privacidade</a>
      </p>
    </footer>
  </div>
</template>

<style scoped></style>
