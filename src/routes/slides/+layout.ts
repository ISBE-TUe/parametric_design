const getWeekLabel = (weekId: string) => weekId.toUpperCase();
const getWeekTitle = (weekId: string) => {
	const match = weekId.match(/^w(\d{1,2})$/i);
	if (!match) return weekId;
	return `Week ${Number(match[1])}`;
};

export const load = async () => {
	const modules = import.meta.glob('/src/content/slides/*/*.md', { eager: true });

	const weeksMap = new Map<
		string,
		{
			id: string;
			label: string;
			title: string;
			sessions: { slug: string; title: string; order: number }[];
		}
	>();

	for (const [path, module] of Object.entries(modules)) {
		const parts = path.split('/');
		const weekId = parts[parts.length - 2] || '';
		const slug = parts[parts.length - 1]?.replace(/\.md$/, '') || '';
		const metadata = (module as { metadata?: { title?: string; order?: number } }).metadata ?? {};

		if (!weeksMap.has(weekId)) {
			weeksMap.set(weekId, {
				id: weekId,
				label: getWeekLabel(weekId),
				title: getWeekTitle(weekId),
				sessions: []
			});
		}

		weeksMap.get(weekId)?.sessions.push({
			slug,
			title: metadata.title ?? slug.replace(/-/g, ' '),
			order: metadata.order ?? 999
		});
	}

	const weeks = Array.from(weeksMap.values())
		.sort((a, b) => a.id.localeCompare(b.id))
		.map((week) => ({
			...week,
			sessions: week.sessions
				.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
				.map(({ order, ...session }) => session)
		}));

	return { weeks };
};
