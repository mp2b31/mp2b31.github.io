<script setup lang="ts">
import { bio } from '../data/portfolio'
</script>

<template>
  <section id="home">
    <div class="container">
      <p class="eyebrow">Data Scientist</p>
      <h1>Hi, I'm <em>{{ bio.name }}</em></h1>
      <p class="tagline">// {{ bio.tagline }}</p>
      <p class="bio">{{ bio.summary }}</p>
      <blockquote>
        {{ bio.quote }}
        <cite>{{ bio.quoteAuthor }}</cite>
      </blockquote>
      <div class="links">
        <a class="btn btn-primary" :href="bio.linkedin" target="_blank">↗ LinkedIn</a>
        <a class="btn btn-outline" :href="bio.github" target="_blank">✦ GitHub</a>
        <a class="btn btn-outline" :href="`mailto:${bio.email}`">✉ Email</a>
        <a class="btn btn-outline" :href="bio.cv" download>↓ CV</a>
      </div>
      <div class="status-card">
        <span class="status-label">Open to work //</span>
        <div>
          <div class="status-role">Data Scientist · ML Engineer</div>
          <div class="status-sub">Seeking new opportunities in AI/ML</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 140px 0 80px;
  position: relative;
}
.container {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}
.eyebrow {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--accent);
  letter-spacing: 0.1em;
  margin-bottom: 20px;
}
h1 {
  font-size: clamp(42px, 7vw, 72px);
  font-weight: 300;
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
}
h1 em {
  font-style: italic;
  color: var(--accent);
}
.tagline {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
  letter-spacing: 0.06em;
  margin-bottom: 28px;
}
.bio {
  font-size: 17px;
  color: var(--muted);
  max-width: 580px;
  line-height: 1.8;
  margin-bottom: 36px;
  font-weight: 300;
}
blockquote {
  border-left: 2px solid var(--accent);
  padding-left: 20px;
  margin: 0 0 40px;
  font-style: italic;
  color: var(--muted);
  font-size: 15px;
  font-weight: 300;
  max-width: 520px;
}
blockquote cite {
  display: block;
  font-style: normal;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  margin-top: 8px;
  opacity: 0.7;
}
.links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.btn {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  padding: 9px 20px;
  border-radius: 4px;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
.btn-primary {
  background: var(--text);
  color: var(--bg);
  border: 1px solid var(--text);
}
.btn-primary:hover { background: var(--accent); border-color: var(--accent); }
.btn-outline {
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--border);
}
.btn-outline:hover { color: var(--text); border-color: var(--muted); }

.status-card {
  display: inline-flex;
  align-items: flex-start;
  gap: 20px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
  max-width: 400px;
}
.status-label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent2);
  white-space: nowrap;
  padding-top: 2px;
}
.status-role {
  font-size: 15px;
  font-weight: 400;
  color: var(--text);
  line-height: 1.4;
}
.status-sub {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
  margin-top: 3px;
}
</style>
