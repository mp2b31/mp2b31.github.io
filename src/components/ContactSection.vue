<script setup lang="ts">
import { bio } from '../data/portfolio'
</script>

<template>
  <section id="contact">
    <div class="container">
      <p class="eyebrow">// Get In Touch</p>
      <h2>Let's <em>connect.</em></h2>
      <p class="sub">
        Whether it's a data science challenge, a collaboration opportunity, or just want to talk machine learning — my inbox is open.
      </p>
      <div class="links">
        <a class="contact-link" :href="bio.linkedin" target="_blank">
          <div>
            <div class="link-label">LinkedIn</div>
            <div class="link-value">maria-paraskeva-datascience-maths-english</div>
          </div>
          <span class="arrow">→</span>
        </a>
        <a class="contact-link" :href="bio.github" target="_blank">
          <div>
            <div class="link-label">GitHub</div>
            <div class="link-value">github.com/mp2b31</div>
          </div>
          <span class="arrow">→</span>
        </a>
        <a class="contact-link" :href="`mailto:${bio.email}`">
          <div>
            <div class="link-label">Email</div>
            <div class="link-value">{{ bio.email }}</div>
          </div>
          <span class="arrow">→</span>
        </a>
        <a class="contact-link" :href="bio.cv" download>
          <div>
            <div class="link-label">Resume</div>
            <div class="link-value">Download CV (PDF)</div>
          </div>
          <span class="arrow">↓</span>
        </a>
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
  margin-bottom: 16px;
}
h2 em { font-style: italic; color: var(--accent); }
.sub {
  font-size: 16px;
  color: var(--muted);
  font-weight: 300;
  max-width: 480px;
  margin-bottom: 48px;
  line-height: 1.75;
}
.links { display: flex; flex-direction: column; gap: 12px; max-width: 480px; }
.contact-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: border-color 0.2s, background 0.2s;
}
.contact-link:hover { border-color: var(--muted); background: var(--card); }
.link-label {
  font-size: 13px;
  color: var(--muted);
  font-weight: 300;
  margin-bottom: 2px;
}
.link-value {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--text);
}
.arrow {
  font-size: 18px;
  color: var(--muted);
  transition: color 0.2s, transform 0.2s;
}
.contact-link:hover .arrow { color: var(--accent); transform: translate(3px, -3px); }
</style>
