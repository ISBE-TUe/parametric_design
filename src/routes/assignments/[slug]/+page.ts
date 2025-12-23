import { error } from '@sveltejs/kit';

export const prerender = true;

export const entries = async () => {
	const modules = import.meta.glob('/src/content/assignments/*.md', { eager: true });
	return Object.keys(modules)
		.map((path) => path.split('/').pop()?.replace(/\.md$/, ''))
		.filter(Boolean)
		.map((slug) => ({ slug }));
};

export const load = async ({ params }) => {
	const modules = import.meta.glob('/src/content/assignments/*.md');
	const path = `/src/content/assignments/${params.slug}.md`;

	const loader = modules[path];
	if (!loader) {
		throw error(404, 'Assignment not found.');
	}

	const module = await loader();
	return {
		content: module.default,
		metadata: module.metadata ?? {},
		slug: params.slug
	};
};
