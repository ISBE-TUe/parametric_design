<template>
	<footer
		class="absolute bottom-0 left-0 z-20 flex w-full items-center justify-between px-6 py-3 text-sm"
	>
		<!-- Left: Page Numbers -->

		<div class="tabular-nums">{{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}</div>
		<!-- Center: course logo + title -->
		<div class="flex items-center gap-3 text-center font-medium tracking-wide">
			<img
				src="/images/TUe-logo-scarlet-L.png"
				alt="Parametric Design"
				class="h-7 object-contain"
			/>
			<span>Parametric Design</span>
		</div>

		<!-- Right: slide numbers -->
		<div class="flex items-center gap-4">
			<img src="/images/TUe-logo-scarlet-L.png" alt="TU/e" class="h-8 object-contain" />
		</div>
	</footer>
</template>
