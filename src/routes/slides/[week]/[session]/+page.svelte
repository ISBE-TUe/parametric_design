<script lang="ts">
	import { base } from '$app/paths';

	export let data: {
		content: typeof import('svelte').SvelteComponent;
		metadata: {
			title?: string;
			description?: string;
			objectives?: string[];
			slidesUrl?: string;
			pdfUrl?: string;
			weekTitle?: string;
		};
		week: string;
		session: string;
	};

	const withBase = (url: string) => (url.startsWith('/') ? `${base}${url}` : url);

	let objectives: string[] = [];
	let slidesUrl = '';
	let pdfUrl = '';
	let description = '';
	let title = '';
	let weekTitle = '';

	$: objectives = data.metadata.objectives ?? [];
	$: slidesUrl = data.metadata.slidesUrl ? withBase(data.metadata.slidesUrl) : '';
	$: pdfUrl = data.metadata.pdfUrl ? withBase(data.metadata.pdfUrl) : '';
	$: description = data.metadata.description ?? '';
	$: title = data.metadata.title ?? data.session.replace(/-/g, ' ');
	$: weekTitle = data.metadata.weekTitle ?? data.week.toUpperCase();
</script>

<div class="space-y-10">
	<header class="space-y-4">
		<h1 class="text-4xl leading-tight font-semibold sm:text-5xl">{title}</h1>
		{#if description}
			<p class="max-w-3xl text-lg text-slate-600">{description}</p>
		{/if}
	</header>

	<div class="grid gap-6">
		<section class="rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur">
			<div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
				<div class="min-w-0">
					<p class="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
						Learning Objectives
					</p>
					{#if objectives.length}
						<ol class="mt-4 space-y-3 text-sm font-medium text-slate-800">
							{#each objectives as objective, index}
								<li class="flex items-start gap-3">
									<span class="text-blue-600">{String(index + 1).padStart(2, '0')}.</span>
									<span>{objective}</span>
								</li>
							{/each}
						</ol>
					{:else}
						<p class="mt-4 text-sm text-slate-500">Add learning objectives in the slide metadata.</p>
					{/if}
				</div>

				<div class="w-full max-w-xs lg:ml-auto">
					<p class="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">Action</p>
					<div class="mt-4 space-y-3">
						{#if slidesUrl}
							<a
								class="flex items-center justify-center gap-3 rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold tracking-[0.15em] text-white uppercase"
								href={slidesUrl}
								target="_blank"
								rel="noreferrer"
							>
								Enter Fullscreen
							</a>
							{#if pdfUrl}
								<a
									class="flex items-center justify-center gap-3 rounded-md border border-slate-200 px-4 py-3 text-sm font-semibold tracking-[0.15em] text-slate-900 uppercase"
									href={pdfUrl}
									target="_blank"
									rel="noreferrer"
								>
									Download PDF
								</a>
							{:else}
								<button
									class="flex w-full items-center justify-center gap-3 rounded-md border border-slate-200 px-4 py-3 text-sm font-semibold tracking-[0.15em] text-slate-400 uppercase"
									disabled
									type="button"
								>
									Download PDF
								</button>
							{/if}
						{:else}
							<p class="text-sm text-slate-500">Add a slidesUrl in the markdown frontmatter.</p>
						{/if}
					</div>
				</div>
			</div>
		</section>
	</div>

	<section class="space-y-4 rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur">
		<div
			class="flex items-center justify-between text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase"
		>
			<span>Interactive presentation • Slidev engine</span>
			{#if slidesUrl}
				<a
					class="text-slate-500 transition hover:text-slate-900"
					href={slidesUrl}
					target="_blank"
					rel="noreferrer"
				>
					Open in new tab ↗
				</a>
			{/if}
		</div>
		<div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
			{#if slidesUrl}
				<iframe {title} src={slidesUrl} class="h-[520px] w-full border-0"></iframe>
			{:else}
				<div class="flex h-[320px] items-center justify-center text-sm text-slate-400">
					Embed your Slidev URL to preview here.
				</div>
			{/if}
		</div>
	</section>

	<article
		class="prose max-w-none rounded-2xl bg-white/70 p-6 shadow-sm backdrop-blur prose-slate prose-headings:font-semibold"
	>
		<svelte:component this={data.content} />
	</article>
</div>
