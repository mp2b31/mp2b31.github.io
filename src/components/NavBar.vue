<script setup lang="ts">
defineProps<{ theme: string }>()
const emit = defineEmits<{ toggleTheme: [] }>()

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#career', label: 'Career' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <nav>
    <a class="logo" href="#home">MP // Data Science</a>
    <ul class="nav-links">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
    </ul>
    <button class="theme-btn" @click="emit('toggleTheme')">
      {{ theme === 'dark' ? 'Light' : 'Dark' }}
    </button>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s, border-color 0.3s;
}
.logo {
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.08em;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 0;
  align-items: center;
}
.nav-links a {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
  padding: 6px 14px;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
  letter-spacing: 0.04em;
}
.nav-links a:hover {
  color: var(--text);
  background: var(--tag-bg);
}
.theme-btn {
  font-family: var(--mono);
  font-size: 11px;
  background: var(--tag-bg);
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 5px 12px;
  cursor: pointer;
  letter-spacing: 0.06em;
  transition: all 0.2s;
}
.theme-btn:hover {
  color: var(--text);
  border-color: var(--muted);
}
@media (max-width: 640px) {
  nav { padding: 0 1rem; }
  .nav-links { display: none; }
}
</style>
