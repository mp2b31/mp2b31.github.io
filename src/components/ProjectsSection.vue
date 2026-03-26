<script setup lang="ts">
import { projects, skills } from '../data/portfolio'
</script>

<template>
  <section id="projects">
    <div class="container">
      <p class="eyebrow">// Selected Work</p>
      <h2>Areas of <strong>Deep Work</strong></h2>

      <div class="skills-strip">
        <span v-for="s in skills" :key="s" class="skill-pill">{{ s }}</span>
      </div>

      <div class="project-list">
        <div v-for="p in projects" :key="p.title" class="project-item">
          <p class="meta">{{ p.meta }}</p>
          <h3>{{ p.title }}</h3>
          <p class="desc">{{ p.desc }}</p>
          <div class="tags">
            <span v-for="tag in p.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 96px 0 64px;
  border-top: 1px solid var(--border);
  position: relative;
}
.container {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 2rem;
}
.eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 36px;
}
h2 {
  font-size: clamp(30px, 4.5vw, 46px);
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 48px;
}
h2 strong { font-weight: 500; }

.skills-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 56px;
}
.skill-pill {
  font-family: var(--mono);
  font-size: 11px;
  padding: 5px 12px;
  border: 1px solid var(--border);
  border-radius: 3px;
  color: var(--muted);
  background: var(--bg2);
  letter-spacing: 0.04em;
  transition: border-color 0.2s, color 0.2s;
  cursor: default;
}
.skill-pill:hover { border-color: var(--accent); color: var(--text); }

.project-list { display: flex; flex-direction: column; }
.project-item {
  padding: 36px 0;
  border-bottom: 1px solid var(--border);
}
.project-item:last-child { border-bottom: none; }

.meta {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}
h3 {
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 10px;
  line-height: 1.3;
}
.desc {
  font-size: 15px;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.75;
  max-width: 580px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}
.tag {
  font-family: var(--mono);
  font-size: 11px;
  background: var(--tag-bg);
  color: var(--tag-text);
  padding: 4px 10px;
  border-radius: 3px;
  border: 1px solid var(--border);
  letter-spacing: 0.04em;
}
</style>
