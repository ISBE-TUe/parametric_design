import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async () => {
	const modules = import.meta.glob('/src/content/slides/*/*.md', { eager: true });
	const paths = Object.keys(modules).sort();

	if (!paths.length) {
		throw redirect(307, '/');
	}

	const firstPath = paths[0];
	const [, week, slugWithExt] = firstPath.split('/').slice(-3);
	const session = slugWithExt.replace(/\.md$/, '');

	throw redirect(307, `${base}/slides/${week}/${session}`);
};
