<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export let data: {
		assignments: { slug: string; title: string }[];
	};

	$: currentPath = $page.url.pathname;
</script>

<section class="mx-auto w-full max-w-5xl px-6 pb-16 pt-10 sm:px-10">
	<nav class="flex flex-wrap gap-3 pb-6">
		{#each data.assignments as assignment, index}
			<a
				href={`${base}/assignments/${assignment.slug}`}
				class={`inline-flex items-center gap-3 rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em] transition ${
					currentPath === `${base}/assignments/${assignment.slug}`
						? 'bg-slate-900 text-white'
						: 'bg-transparent text-slate-500 hover:text-slate-900'
				}`}
			>
				<span class="normal-case tracking-normal">Assignment {index + 1}</span>
			</a>
		{/each}
	</nav>

	<div class="pt-8">
		<slot />
	</div>
</section>
