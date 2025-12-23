import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const modules = import.meta.glob('/src/content/slides/*/*.md');
	const prefix = `/src/content/slides/${params.week}/`;
	const matches = Object.keys(modules)
		.filter((path) => path.startsWith(prefix))
		.sort();

	if (!matches.length) {
		throw redirect(307, '/slides');
	}

	const session = matches[0].split('/').pop()?.replace(/\.md$/, '') ?? '';
	throw redirect(307, `/slides/${params.week}/${session}`);
};
