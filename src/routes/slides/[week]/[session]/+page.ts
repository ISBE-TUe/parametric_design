import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const modules = import.meta.glob('/src/content/slides/*/*.md');
	const path = `/src/content/slides/${params.week}/${params.session}.md`;
	const loader = modules[path];

	if (!loader) {
		throw error(404, 'Slide session not found.');
	}

	const module = await loader();
	return {
		content: module.default,
		metadata: module.metadata ?? {},
		week: params.week,
		session: params.session
	};
};
