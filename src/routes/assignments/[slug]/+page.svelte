<script lang="ts">
	export let data: {
		content: typeof import('svelte').SvelteComponent;
		metadata: { title?: string };
		slug: string;
	};
</script>

<article class="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
	{#if data.metadata?.title}
		<h2 class="text-2xl font-semibold text-slate-900">{data.metadata.title}</h2>
	{/if}
	<svelte:component this={data.content} />
</article>
