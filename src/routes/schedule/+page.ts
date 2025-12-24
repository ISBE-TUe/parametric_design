export const load = async () => {
	const modules = import.meta.glob('/src/content/schedule.md', { eager: true });
	const entry = modules['/src/content/schedule.md'] as {
		metadata?: { weeks?: unknown };
	};

	return {
		weeks: entry?.metadata?.weeks ?? []
	};
};
