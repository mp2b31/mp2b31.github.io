<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import ParticleBackground from './components/ParticleBackground.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CareerSection from './components/CareerSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import { bio } from './data/portfolio'

const theme = ref<'dark' | 'light'>('dark')

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

watch(theme, (t) => {
  document.documentElement.setAttribute('data-theme', t)
}, { immediate: true })
</script>

<template>
  <div class="app">
    <ParticleBackground :theme="theme" />
    <NavBar :theme="theme" @toggle-theme="toggleTheme" />
    <main>
      <HeroSection />
      <ProjectsSection />
      <CareerSection />
      <EducationSection />
      <ContactSection />
    </main>
    <footer>
      <div class="container">
        <p>© 2026 Maria Paraskeva. All rights reserved.</p>
        <p>Built with craft // {{ bio.location }}</p>
      </div>
    </footer>
  </div>
</template>

<style>
.app { position: relative; min-height: 100vh; }

main { position: relative; z-index: 1; }

footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--border);
  padding: 32px 0;
}
footer .container {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}
footer p {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.06em;
}
</style>
