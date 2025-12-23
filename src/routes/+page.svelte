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

	<div
		class="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-12 px-6 py-20 sm:px-10"
	>
		<div class="flex flex-col gap-8">
			<div class="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
				<h1 class="text-4xl leading-tight font-semibold sm:text-5xl">Parametric Design</h1>
				<div
					class="w-full max-w-xs rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
				>
					<div class="flex items-center justify-between gap-3">
						<label class="text-sm font-semibold text-slate-800" for="amplitude">Amplitude</label>
						<span class="font-mono text-xs text-slate-600">{amplitude.toFixed(1)}</span>
					</div>
					<input
						id="amplitude"
						type="range"
						min="1"
						max="12"
						step="0.5"
						bind:value={amplitude}
						class="mt-1 w-full accent-slate-900"
					/>

					<div class="mt-4 flex items-center justify-between gap-3">
						<label class="text-sm font-semibold text-slate-800" for="frequency">Frequency</label>
						<span class="font-mono text-xs text-slate-600">{frequency.toFixed(1)}</span>
					</div>
					<input
						id="frequency"
						type="range"
						min="1"
						max="8"
						step="0.5"
						bind:value={frequency}
						class="mt-1 w-full accent-slate-900"
					/>

					<div class="mt-4 flex items-center justify-between gap-3">
						<label class="text-sm font-semibold text-slate-800" for="speed">Speed</label>
						<span class="font-mono text-xs text-slate-600">{speed.toFixed(1)}</span>
					</div>
					<input
						id="speed"
						type="range"
						min="1"
						max="10"
						step="0.5"
						bind:value={speed}
						class="mt-1 w-full accent-slate-900"
					/>
				</div>
			</div>

			<blockquote
				class="max-w-4xl space-y-4 rounded-2xl bg-white/60 p-6 text-slate-800 shadow-sm backdrop-blur"
			>
				<p class="text-lg leading-relaxed">
					“Design begins with the conscious or unconscious attribution of values to parameters
					describing functional requirements of the object and the constraints that limit the range
					of possible design solutions... The term parametric design is used to mean the use of a
					computer to automatically modify a design as the values of parameters change.”
				</p>
				<p class="text-sm font-semibold tracking-[0.15em] text-slate-600 uppercase">
					— Hudson R. Strategies for Parametric Design in Architecture (2010)
				</p>
			</blockquote>

			<div
				class="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white/60 shadow-sm backdrop-blur"
			>
				<div
					class="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
				>
					<a href="/slides" class="group flex items-center justify-between px-6 py-8 sm:px-8">
						<span class="text-xl font-semibold text-slate-900 uppercase">Slides</span>
						<span class="text-2xl text-slate-800 transition-transform group-hover:translate-x-1"
							>→</span
						>
					</a>
					<a href="/assignments" class="group flex items-center justify-between px-6 py-8 sm:px-8">
						<span class="text-xl font-semibold text-slate-900 uppercase">Assignments</span>
						<span class="text-2xl text-slate-800 transition-transform group-hover:translate-x-1"
							>→</span
						>
					</a>
					<a href="#schedule" class="group flex items-center justify-between px-6 py-8 sm:px-8">
						<span class="text-xl font-semibold text-slate-900 uppercase">Schedule</span>
						<span class="text-2xl text-slate-800 transition-transform group-hover:translate-x-1"
							>→</span
						>
					</a>
				</div>
			</div>

			<section
				id="course"
				class="mt-10 max-w-5xl rounded-2xl bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8"
			>
				<div class="mb-4 inline-flex items-center gap-3">
					<span
						class="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold tracking-[0.15em] text-white uppercase"
						>Preview</span
					>
					<h2 class="text-3xl font-semibold text-slate-900">Course structure</h2>
				</div>
				<p class="text-lg font-medium text-slate-600">
					Introduction to computational logic and generative systems.
				</p>

				<div class="mt-6 space-y-5 text-base leading-relaxed text-slate-800">
					<p>
						In this class, computational design methods and technologies are investigated that
						enable designers and engineers to generate, analyze and optimize built structures on
						various levels of detail and at different planning and design stages.
					</p>
					<p>Use cases and application fields include:</p>
					<ul class="list-disc space-y-2 pl-5">
						<li>
							Iterative and/or interactive form-finding for the building envelope in the early
							architectural design stages.
						</li>
						<li>
							Analysis and optimization of individual building components and assemblies based on
							requirements.
						</li>
						<li>
							Creation and simulation of reactive and adaptive building components such as facades.
						</li>
					</ul>
					<p>
						The common underlying conceptual approach is the notion of parametric objects that are
						generated, modified and mutated mainly with respect to their geometry and spatial
						arrangement.
					</p>
				</div>
			</section>
		</div>
	</div>
</section>
