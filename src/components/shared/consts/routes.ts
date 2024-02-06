type Route = {
	title: string;
	path: string;
};

type Routes = {
	[key: string]: Route;
};

export const routes: Routes = {
	home: {
		title: 'Home',
		path: '/',
	},
	about: {
		title: 'About me',
		path: '/about_me',
	},
	projects: {
		title: 'Projects',
		path: '/projects',
	},
} as const;
