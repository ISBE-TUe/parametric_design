<script lang="ts">
  import { browser } from '$app/environment';
  import { onDestroy, onMount } from 'svelte';
  import * as d3 from 'd3';

  export let amplitude = 5;
  export let frequency = 3;
  export let speed = 5;

  let svgEl: SVGSVGElement | null = null;
  let raf = 0;
  let t = 0;

  const rows = 30;
  const cols = 50;

  const setViewBox = () => {
    if (!browser || !svgEl) return;
    d3.select(svgEl)
      .attr('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`)
      .attr('preserveAspectRatio', 'xMidYMid slice');
  };

  const draw = (width: number, height: number) => {
    if (!svgEl) return;
    const svg = d3.select(svgEl);

    const spacingX = width / cols;
    const spacingY = height / rows;

    t += speed * 0.01;

    const nodes: { x: number; y: number }[] = [];
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = i * spacingX;
        const y0 = j * spacingY;
        const dist = Math.sqrt((x - width / 2) ** 2 + (y0 - height / 2) ** 2);
        const wave = Math.sin(dist * frequency * 0.01 - t) * amplitude * 10;
        nodes.push({ x, y: y0 + wave });
      }
    }

    svg.selectAll('*').remove();

    const line = d3
      .line<{ x: number; y: number }>()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(d3.curveBasis);

    for (let j = 0; j <= rows; j++) {
      const rowPoints = [];
      for (let i = 0; i <= cols; i++) rowPoints.push(nodes[i * (rows + 1) + j]);
      svg
        .append('path')
        .datum(rowPoints)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', '#cbd5e1')
        .attr('stroke-width', 1);
    }

    for (let i = 0; i <= cols; i++) {
      const colPoints = [];
      for (let j = 0; j <= rows; j++) colPoints.push(nodes[i * (rows + 1) + j]);
      svg
        .append('path')
        .datum(colPoints)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', '#cbd5e1')
        .attr('stroke-width', 1);
    }
  };

  const loop = () => {
    if (!browser) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    draw(width, height);
    raf = requestAnimationFrame(loop);
  };

  onMount(() => {
    if (!browser) return;
    setViewBox();
    loop();
    window.addEventListener('resize', setViewBox);
  });

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener('resize', setViewBox);
    cancelAnimationFrame(raf);
  });
</script>

<div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
  <svg bind:this={svgEl} class="h-full w-full"></svg>
  <div class="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white"></div>
</div>
