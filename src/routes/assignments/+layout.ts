export const load = async () => {
	const modules = import.meta.glob('/src/content/assignments/*.md', { eager: true });
	const assignments = Object.entries(modules)
		.map(([path, module]) => {
			const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? '';
			const metadata = (module as { metadata?: { title?: string } }).metadata;
			return {
				slug,
				title: metadata?.title ?? slug.replace(/-/g, ' ')
			};
		})
		.sort((a, b) => a.slug.localeCompare(b.slug));

	return { assignments };
};
