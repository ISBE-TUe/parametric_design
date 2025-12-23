import { error, redirect } from '@sveltejs/kit';

export const load = async () => {
	const modules = import.meta.glob('/src/content/assignments/*.md', { eager: true });
	const slugs = Object.keys(modules)
		.map((path) => path.split('/').pop()?.replace(/\.md$/, '') ?? '')
		.filter(Boolean)
		.sort();

	if (!slugs.length) {
		throw error(404, 'No assignments found.');
	}

	throw redirect(307, `/assignments/${slugs[0]}`);
};
