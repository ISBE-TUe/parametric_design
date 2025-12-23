<script lang="ts">
	import { page } from '$app/stores';

	export let data: {
		assignments: { slug: string; title: string }[];
	};

	$: currentPath = $page.url.pathname;
</script>

<section class="mx-auto w-full max-w-5xl px-6 pb-16 pt-10 sm:px-10">
	<div class="mb-6 flex flex-wrap items-center justify-between gap-4">
		<div>
			<span class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Assignments</span>
			<h1 class="mt-2 text-3xl font-semibold text-slate-900">Project briefs</h1>
		</div>
		<p class="text-sm font-medium text-slate-500">Open an assignment to see the full brief.</p>
	</div>

	<nav class="flex flex-wrap gap-3 border-b border-slate-200 pb-6">
		{#each data.assignments as assignment, index}
			<a
				href={`/assignments/${assignment.slug}`}
				class={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition ${
					currentPath === `/assignments/${assignment.slug}`
						? 'border-slate-900 bg-slate-900 text-white'
						: 'border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-900'
				}`}
			>
				<span class="text-xs">A{String(index + 1).padStart(2, '0')}</span>
				<span class="normal-case tracking-normal">{assignment.title}</span>
			</a>
		{/each}
	</nav>

	<div class="pt-8">
		<slot />
	</div>
</section>
