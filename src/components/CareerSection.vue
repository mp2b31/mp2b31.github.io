<script setup lang="ts">
import { experience, volunteering } from '../data/portfolio'
</script>

<template>
  <section id="career">
    <div class="container">
      <p class="eyebrow">// Work History</p>
      <h2>Experience &amp; <strong>Career</strong></h2>

      <div class="timeline">
        <div class="tl-group">
          <p class="tl-group-label">// Professional</p>
          <div v-for="job in experience" :key="job.title + job.date" class="tl-item">
            <div class="tl-dot" />
            <div class="tl-date">{{ job.date }}</div>
            <div class="tl-title">{{ job.title }}</div>
            <div class="tl-org">{{ job.org }}</div>
            <ul class="tl-body">
              <li v-for="b in job.bullets" :key="b">{{ b }}</li>
            </ul>
          </div>
        </div>

        <div class="tl-group">
          <p class="tl-group-label">// Volunteering</p>
          <div v-for="job in volunteering" :key="job.title + job.date" class="tl-item">
            <div class="tl-dot" />
            <div class="tl-date">{{ job.date }}</div>
            <div class="tl-title">{{ job.title }}</div>
            <div class="tl-org">{{ job.org }}</div>
            <ul class="tl-body">
              <li v-for="b in job.bullets" :key="b">{{ b }}</li>
            </ul>
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
  margin-bottom: 56px;
}
h2 strong { font-weight: 500; }

.timeline {
  position: relative;
  padding-left: 1px;
}
.tl-group { margin-bottom: 56px; }
.tl-group-label {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 28px;
  padding-left: 24px;
}
.tl-item {
  padding-left: 24px;
  position: relative;
  margin-bottom: 36px;
}
.tl-dot {
  position: absolute;
  left: -3px;
  top: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
  outline: 1px solid var(--accent);
}
.tl-date {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.06em;
  margin-bottom: 4px;
}
.tl-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 2px;
}
.tl-org {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent2);
  margin-bottom: 10px;
  letter-spacing: 0.04em;
}
.tl-body {
  font-size: 14px;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.7;
  padding-left: 16px;
}
.tl-body li { margin-bottom: 4px; }
</style>
