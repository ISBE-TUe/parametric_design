import { error } from '@sveltejs/kit';

export const prerender = true;

export const entries = async () => {
	const modules = import.meta.glob('/src/content/slides/*/*.md', { eager: true });
	return Object.keys(modules).map((path) => {
		const parts = path.split('/');
		const week = parts[parts.length - 2];
		const session = parts[parts.length - 1]?.replace(/\.md$/, '');
		return { week, session };
	});
};

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
