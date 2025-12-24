<script lang="ts">
	import DayCard from '$lib/components/DayCard.svelte';

	export let data: {
		weeks: {
			label: string;
			range: string;
			days: {
				day: string;
				date: string;
				type: string;
				title?: string;
				time?: string;
				description?: string;
			}[];
		}[];
	};
</script>

<svelte:head>
	<title>Schedule · Parametric Design</title>
</svelte:head>

<section class="min-h-screen bg-white text-slate-900">
	<div class="mx-auto max-w-6xl px-6 pb-16 pt-24 sm:px-10">
		<div class="overflow-x-auto">
			<div class="min-w-[900px] grid gap-4">
				<div class="grid items-end gap-4 text-xs font-mono font-bold uppercase tracking-widest text-slate-500 grid-cols-[160px_repeat(5,minmax(0,1fr))]">
					<div></div>
					<div class="border-b border-slate-200 pb-3 text-sm font-semibold text-slate-800">Monday</div>
					<div class="border-b border-slate-200 pb-3 text-sm font-semibold text-slate-800">Tuesday</div>
					<div class="border-b border-slate-200 pb-3 text-sm font-semibold text-slate-800">Wednesday</div>
					<div class="border-b border-slate-200 pb-3 text-sm font-semibold text-slate-800">Thursday</div>
					<div class="border-b border-slate-200 pb-3 text-sm font-semibold text-slate-800">Friday</div>
				</div>

				{#each data.weeks as week}
					<div class="grid gap-4 grid-cols-[160px_repeat(5,minmax(0,1fr))]">
						<div class="flex flex-col gap-1">
							<span class="text-lg font-semibold uppercase tracking-[0.2em] text-slate-700">
								{week.label}
							</span>
							<span class="text-base font-semibold text-slate-500">{week.range}</span>
						</div>

						{#each week.days as day}
							<DayCard
								day={day.day}
								date={day.date}
								type={day.type}
								title={day.title}
								time={day.time}
								description={day.description}
							/>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
