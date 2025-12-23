<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header class="fixed inset-x-0 top-0 z-50 px-6 py-5 sm:px-10">
	<nav
		class="flex items-center justify-between gap-6 rounded-full bg-white/95 px-4 py-3 shadow-sm backdrop-blur"
	>
		<a class="flex items-center gap-3" href={`${base}/`}>
			<img
				src={`${base}/shared/images/parametric_design_logo_transparent.png`}
				alt="Parametric Design"
				class="h-10 object-cover"
			/>
			<span class="text-lg font-semibold text-slate-900">Parametric Design</span>
		</a>
		<div class="flex items-center gap-6 text-sm font-medium text-slate-700">
			<a class="transition hover:text-slate-900" href={`${base}/slides`}>Slides</a>
			<a class="transition hover:text-slate-900" href={`${base}/assignments`}>Assignments</a>
			<a class="transition hover:text-slate-900" href={`${base}/schedule`}>Schedule</a>
			<div class="h-6 w-px bg-slate-200"></div>
			<a
				class="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold tracking-[0.1em] text-white uppercase shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
				href="https://canvas.tue.nl/">Login to Canvas</a
			>
		</div>
	</nav>
</header>

<main class="pt-24 sm:pt-24">
	{@render children()}
</main>

<footer
	class="px-6 pt-6 pb-10 text-center text-xs tracking-[0.2em] text-slate-400 uppercase sm:px-10"
>
	Created by Ozgun Balaban
</footer>
