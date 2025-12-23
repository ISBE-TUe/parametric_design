<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export let data: {
		weeks: {
			id: string;
			label: string;
			title: string;
			sessions: { slug: string; title: string }[];
		}[];
	};

	$: currentWeek = data.weeks.find((week) => week.id === $page.params.week) ?? data.weeks[0];
	$: currentSession =
		currentWeek?.sessions.find((session) => session.slug === $page.params.session) ??
		currentWeek?.sessions[0];
</script>

<section class="relative min-h-screen bg-white text-slate-900">
	<div
		class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/95 to-white"
	></div>

	<div class="mx-auto max-w-6xl px-6 pt-8 pb-16 sm:px-10">
		<nav class="flex flex-wrap items-center gap-3">
			{#each data.weeks as week}
				<a
					href={`${base}/slides/${week.id}/${week.sessions[0]?.slug ?? ''}`}
					class={`inline-flex items-center rounded-md px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition ${
						currentWeek?.id === week.id
							? 'bg-slate-900 text-white'
							: 'text-slate-400 hover:text-slate-900'
					}`}
				>
					{week.label}
				</a>
			{/each}
		</nav>

		{#if currentWeek}
			<div class="mt-4 border-b border-slate-200 pb-4">
				<div class="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
					<span
						class="rounded-md bg-slate-100 px-3 py-1 text-xs tracking-[0.2em] text-slate-500 uppercase"
					>
						Sessions
					</span>
					<span class="h-1 w-1 rounded-full bg-blue-500"></span>
					{#each currentWeek.sessions as session, index}
						<a
							href={`${base}/slides/${currentWeek.id}/${session.slug}`}
							class={`transition ${
								currentSession?.slug === session.slug
									? 'text-slate-900'
									: 'text-slate-400 hover:text-slate-900'
							}`}
						>
							{session.title}
						</a>
						{#if index < currentWeek.sessions.length - 1}
							<span class="text-slate-300">•</span>
						{/if}
					{/each}
				</div>
			</div>
		{/if}

		<div class="mt-6">
			<slot />
		</div>
	</div>
</section>
