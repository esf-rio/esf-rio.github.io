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

  <div class="esf-image-background position-relative rounded">
    <div class="esf-image-color-background row">
      <div class="text-start text-light d-flex justify-content-center">
        <h1>Contato</h1>
      </div>
    </div>
  </div>


  <div class="row justify-content-center mt-5">
    <div class="col-12 col-md-10 d-flex flex-column">
      <div class="mb-4">
        <img src="../assets/contact/Foto-voluntario-1024x768.jpg" alt="Logo" class="img-fluid"
          style="width: 500px;">
      </div>
      <div class="mb-3">
        <a href="mailto:contato@esf-rio.org" target="_blank" class=" text-decoration-none fs-6" style="color: #1da879;">
          <i class="fas fa-envelope" aria-hidden="true"></i>
          <span class="link-text"> contato@esf-rio.org</span>
        </a>
      </div>
      <div class="d-flex gap-3">
        <a href="https://www.facebook.com/esf.riodejaneiro" target="_blank" class="social-icon fs-6">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/esf.riodejaneiro" target="_blank" class="social-icon fs-6">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/esf-rio/" target="_blank" class="social-icon fs-6">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCr4PWofwcuoCntOydZ6lPoA" target="_blank" class="social-icon fs-6">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>


  <div class="row g-1 mt-5">
    <div class="col-custom">
      <img src="../assets/contact/people/Esf_Filipe_New-1024x1024.png" class="img-fluid" alt="Foto 1">
    </div>
    <div class="col-custom">
      <img src="../assets/contact/people/Esf_Cladice_New-1024x1024.png" class="img-fluid" alt="Foto 2">
    </div>
    <div class="col-custom">
      <img src="../assets/contact/people/Esf_Roberta_New-1024x1024.png" class="img-fluid" alt="Foto 3">
    </div>
    <div class="col-custom">
      <img src="../assets/contact/people/Esf_Ane_New-1024x1024.png" class="img-fluid" alt="Foto 4">
    </div>
    <div class="col-custom">
      <img src="../assets/contact/people/Esf_Camilla_New-1024x1024.png" class="img-fluid" alt="Foto 5">
    </div>
  </div>

</template>

<style scoped>
.esf-image-background {
  background-image: url("../assets/contact/Galera-nova-AGE-scaled.jpg");
  background-size: cover;
  background-position: center -8em;
  background-attachment: fixed;
  overflow: hidden;
  padding: 0;
}

.esf-image-color-background {
  background-color: rgba(29, 169, 122, 0.65);
  padding: 4rem 0;
}

.image-overflow {
  margin-top: -50px;
  /* faz ela subir */
  z-index: 3;
  position: relative;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #1da879;
  color: white;
  border-radius: 50%;
  transition: all 0.3s;
  text-decoration: none;

}

.link-text:hover {
  color: black;
}

.social-icon:hover {
  background-color: black;
}

.col-custom {
  max-width: 20%;
}

@media (max-width: 992px) {
  .col-custom {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
}

@media (max-width: 576px) {
  .col-custom {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 400px) {
  .col-custom {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
