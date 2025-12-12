<script lang="ts">
  import { browser } from '$app/environment';
  import { onDestroy, onMount } from 'svelte';

  export let amplitude = 8;
  export let frequency = 3;
  export let speed = 4;

  const BASE_W = 1400;
  const BASE_H = 900;

  let canvasEl: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let raf = 0;
  let t = 0;
  let dpr = 1;

  const rows = 24;
  const cols = 36;

  const setupCanvas = () => {
    if (!canvasEl) return;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvasEl.width = BASE_W * dpr;
    canvasEl.height = BASE_H * dpr;
    canvasEl.style.width = '100vw';
    canvasEl.style.height = '100vh';
    ctx = canvasEl.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);
  };

  const drawSmoothLine = (points: { x: number; y: number }[]) => {
    if (!ctx || points.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length - 1; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      const midY = (prev.y + curr.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
    }
    const penultimate = points[points.length - 2];
    const last = points[points.length - 1];
    ctx.quadraticCurveTo(penultimate.x, penultimate.y, last.x, last.y);
    ctx.stroke();
  };

  const draw = () => {
    if (!ctx || !canvasEl) return;
    ctx.clearRect(0, 0, BASE_W, BASE_H);
    ctx.lineWidth = 1.1;
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.8)';

    const spacingX = BASE_W / cols;
    const spacingY = BASE_H / rows;

    const nodes: { x: number; y: number }[][] = [];
    for (let j = 0; j <= rows; j++) {
      const row: { x: number; y: number }[] = [];
      for (let i = 0; i <= cols; i++) {
        const x = i * spacingX;
        const y0 = j * spacingY;
        const dist = Math.hypot(x - BASE_W / 2, y0 - BASE_H / 2);
        const wave = Math.sin(dist * frequency * 0.01 - t) * amplitude * 10;
        row.push({ x, y: y0 + wave });
      }
      nodes.push(row);
    }

    // horizontal lines
    for (let j = 0; j <= rows; j++) {
      drawSmoothLine(nodes[j]);
    }

    // vertical lines
    for (let i = 0; i <= cols; i++) {
      const colPoints: { x: number; y: number }[] = [];
      for (let j = 0; j <= rows; j++) {
        colPoints.push(nodes[j][i]);
      }
      drawSmoothLine(colPoints);
    }
  };

  const loop = () => {
    if (!browser) return;
    t += speed * 0.01;
    draw();
    raf = requestAnimationFrame(loop);
  };

  onMount(() => {
    if (!browser) return;
    if (!canvasEl) return;
    setupCanvas();
    loop();
  });

  onDestroy(() => {
    if (!browser) return;
    cancelAnimationFrame(raf);
  });
</script>

<div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
  <canvas bind:this={canvasEl} class="h-full w-full"></canvas>
  <div class="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white"></div>
</div>
