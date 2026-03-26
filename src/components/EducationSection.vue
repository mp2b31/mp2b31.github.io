<script setup lang="ts">
import { education, certifications, languages } from '../data/portfolio'
</script>

<template>
  <section id="education">
    <div class="container">
      <p class="eyebrow">// Academic Background</p>
      <h2>Education &amp; <strong>Certifications</strong></h2>

      <div class="edu-grid">
        <div v-for="item in education" :key="item.degree" class="edu-card">
          <div class="edu-degree">{{ item.degree }}</div>
          <div class="edu-school">{{ item.school }}</div>
          <div class="edu-year">{{ item.year }}</div>
          <div v-if="item.detail" class="edu-detail">{{ item.detail }}</div>
        </div>
      </div>

      <div class="sub-section">
        <p class="sub-eyebrow">// Certifications &amp; Courses</p>
        <div class="tags">
          <span v-for="c in certifications" :key="c" class="tag">{{ c }}</span>
        </div>
      </div>

      <div class="sub-section">
        <p class="sub-eyebrow">// Languages</p>
        <div class="tags">
          <span v-for="l in languages" :key="l" class="tag">{{ l }}</span>
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

.edu-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 48px;
}
.edu-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px 28px;
  transition: border-color 0.2s;
}
.edu-card:hover { border-color: var(--muted); }
.edu-degree {
  font-size: 16px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 4px;
}
.edu-school {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent2);
  margin-bottom: 4px;
  letter-spacing: 0.04em;
}
.edu-year {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.06em;
}
.edu-detail {
  font-size: 13px;
  color: var(--muted);
  margin-top: 10px;
  font-weight: 300;
}

.sub-section { margin-bottom: 36px; }
.sub-eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag {
  font-family: var(--mono);
  font-size: 11px;
  background: var(--tag-bg);
  color: var(--tag-text);
  padding: 5px 12px;
  border-radius: 3px;
  border: 1px solid var(--border);
  letter-spacing: 0.04em;
}
</style>
