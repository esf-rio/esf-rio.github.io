<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Component } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
import Partnership from './components/Partnership.vue'
import Team from './components/Team.vue'
import Transparency from './components/Transparency.vue'
import Volunteer from './components/Volunteer.vue'
import Covid from './components/Covid.vue'
import Prover from './components/Prover.vue'


const routes: Record<string, Component> = {
  '/': About,
  '/about': About,
  '/team': Team,
  '/transparency': Transparency,
  '/partnership': Partnership,
  '/volunteer': Volunteer,
  '/covid': Covid,
  '/prover': Prover
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  let view = routes[currentPath.value.slice(1) || '/']
  return view
})
</script>

<template>

  <main>
    <div class="container">
      <Navbar />
      <component :is="currentView" />
      
      <!-- dummy for footer -->
      <div class="row mb-4"></div>
    </div>
    <Footer/>
  </main>
</template>

<style scoped></style>
