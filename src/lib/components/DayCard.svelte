<script lang="ts">
	export let date = '';
	export let type = '';
	export let title = '';
	export let time = '';
	export let description = '';

	const isEmpty = type.toLowerCase() === 'self-study' || !type;
	const isDeadline = type.toLowerCase() === 'deadline';
	const accent =
		type.toLowerCase() === 'lecture'
			? 'border-l-indigo-500'
			: type.toLowerCase() === 'workshop'
				? 'border-l-blue-500'
				: 'border-l-slate-200';
</script>

<div class="flex flex-col gap-4">
	{#if isEmpty}
		<div
			class="flex flex-1 items-center justify-center rounded-xl border-2 border-dashed border-slate-50"
		>
			<span class="font-mono text-[10px] tracking-widest text-slate-200 uppercase">Self-Study</span>
		</div>
	{:else}
		<div
			class={`group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md ${
				isDeadline ? '' : `border-l-4 ${accent}`
			}`}
		>
			<div class="mb-3 flex flex-col gap-1">
				<span class="text-xs font-semibold tracking-widest text-slate-800 uppercase">
					{date}
				</span>
				{#if isDeadline}
					<span class="font-mono text-[10px] font-bold tracking-widest text-slate-500 uppercase">
						Assignment due
					</span>
				{:else}
					<span class="font-mono text-[10px] font-bold text-slate-400">{time}</span>
				{/if}
			</div>
			<h4 class="text-sm font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
				{title}
			</h4>
			{#if description}
				<p class="mt-2 text-xs leading-relaxed text-slate-500">{description}</p>
			{/if}
			<div class="mt-4 border-t border-slate-50 pt-4">
				<span class="font-mono text-[9px] font-bold tracking-tighter text-slate-400 uppercase">
					{type}
				</span>
			</div>
		</div>
	{/if}
</div>
