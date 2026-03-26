<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{ theme: string }>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId = 0

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

function initCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')!
  let W = (canvas.width = window.innerWidth)
  let H = (canvas.height = window.innerHeight)

  const COUNT = Math.min(Math.floor((W * H) / 18000), 90)
  const CONNECT_DIST = 130
  const particles: Particle[] = []

  function spawn(): Particle {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(spawn())

  function getColors() {
    const dark = props.theme === 'dark'
    return {
      dot: dark ? 'rgba(212,120,74,' : 'rgba(181,82,27,',
      line: dark ? 'rgba(155,149,136,' : 'rgba(107,104,96,',
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H)
    const { dot, line } = getColors()

    // draw lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.25
          ctx.beginPath()
          ctx.strokeStyle = `${line}${alpha})`
          ctx.lineWidth = 0.6
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }

    // draw dots
    for (const p of particles) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = `${dot}${p.opacity})`
      ctx.fill()
    }
  }

  function update() {
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0) p.x = W
      if (p.x > W) p.x = 0
      if (p.y < 0) p.y = H
      if (p.y > H) p.y = 0
    }
  }

  function loop() {
    update()
    draw()
    animId = requestAnimationFrame(loop)
  }

  cancelAnimationFrame(animId)
  loop()

  function onResize() {
    if (!canvas) return
    W = canvas.width = window.innerWidth
    H = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', onResize)

  return () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', onResize)
  }
}

let cleanup: (() => void) | undefined

onMounted(() => {
  cleanup = initCanvas() ?? undefined
})

onUnmounted(() => cleanup?.())

// redraw when theme changes (colors update automatically on next frame)
watch(() => props.theme, () => {})
</script>

<template>
  <canvas ref="canvasRef" class="particle-canvas" />
</template>

<style scoped>
.particle-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
