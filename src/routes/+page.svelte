<script lang="ts">
  import { CanvasWaveBackground } from '$lib';

  let amplitude = 6;
  let frequency = 3;
  let speed = 4;
</script>

<svelte:head>
  <title>Parametric Design 2026</title>
</svelte:head>

<section class="relative min-h-screen overflow-hidden bg-white text-slate-900">
  <CanvasWaveBackground {amplitude} {frequency} {speed} />

  <div class="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-10 px-6 py-16 sm:px-10">
    <div class="inline-flex max-w-max items-center gap-2 rounded-full bg-slate-900/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
      Parametric design · 2026
    </div>

    <div class="max-w-3xl space-y-6">
      <h1 class="text-4xl font-semibold leading-tight sm:text-5xl">
        Generative systems for bold spatial identities.
      </h1>
      <p class="text-lg leading-relaxed text-slate-700">
        We prototype interactive form-finding tools that fuse fabrication data, environmental intent,
        and expressive geometry. Every model starts as a parametric sketch and evolves through live
        simulation.
      </p>
    </div>

    <div class="flex flex-wrap items-center gap-4">
      <a
        class="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-[1px] hover:shadow-xl"
        href="mailto:hello@parametric.design"
        >Book a session</a
      >
      <span class="text-sm text-slate-700">
        New explorations launch weekly · Realtime viewport background runs on canvas (no GPU driver needed).
      </span>
    </div>

    <div class="mt-6 grid w-full max-w-xl gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
      <div class="flex items-center justify-between gap-4">
        <label class="text-sm font-semibold text-slate-800" for="amplitude">Amplitude</label>
        <input
          id="amplitude"
          type="range"
          min="1"
          max="12"
          step="0.5"
          bind:value={amplitude}
          class="w-full accent-slate-900"
        />
        <span class="w-12 text-right text-sm font-mono text-slate-700">{amplitude.toFixed(1)}</span>
      </div>
      <div class="flex items-center justify-between gap-4">
        <label class="text-sm font-semibold text-slate-800" for="frequency">Frequency</label>
        <input
          id="frequency"
          type="range"
          min="1"
          max="8"
          step="0.5"
          bind:value={frequency}
          class="w-full accent-slate-900"
        />
        <span class="w-12 text-right text-sm font-mono text-slate-700">{frequency.toFixed(1)}</span>
      </div>
      <div class="flex items-center justify-between gap-4">
        <label class="text-sm font-semibold text-slate-800" for="speed">Speed</label>
        <input
          id="speed"
          type="range"
          min="1"
          max="10"
          step="0.5"
          bind:value={speed}
          class="w-full accent-slate-900"
        />
        <span class="w-12 text-right text-sm font-mono text-slate-700">{speed.toFixed(1)}</span>
      </div>
    </div>
  </div>
</section>
