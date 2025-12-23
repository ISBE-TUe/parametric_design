<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header class="fixed inset-x-0 top-0 z-50 px-6 py-5 sm:px-10">
	<nav class="flex items-center justify-between gap-6 rounded-full bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold uppercase text-white">
				PD
			</div>
			<span class="text-lg font-semibold text-slate-900">Parametric Design</span>
		</div>
		<div class="flex items-center gap-6 text-sm font-medium text-slate-700">
			<a class="transition hover:text-slate-900" href="/content">Course Content</a>
			<a class="transition hover:text-slate-900" href="/assignments">Assignments</a>
			<a class="transition hover:text-slate-900" href="#schedule">Schedule</a>
			<div class="h-6 w-px bg-slate-200"></div>
			<a
				class="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
				href="https://canvas.instructure.com/"
				>Canvas</a
			>
		</div>
	</nav>
</header>

<main class="pt-24 sm:pt-24">
	{@render children()}
</main>
