<script lang="ts">
	export let data: {
		content: typeof import('svelte').SvelteComponent;
		metadata: { title?: string };
		slug: string;
	};
</script>

<article
	class="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8 prose prose-slate max-w-none prose-headings:font-semibold prose-a:text-slate-900 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
>
	{#if data.metadata?.title}
		<h2>{data.metadata.title}</h2>
	{/if}
	<svelte:component this={data.content} />
</article>
