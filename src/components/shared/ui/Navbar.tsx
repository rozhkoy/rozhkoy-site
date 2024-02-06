import type { FunctionComponent } from 'preact';
import { routes } from '../consts/routes';
import { NavLink } from './NavLink';
import type { PropsWithClassName } from '../type/PropsWithClassName';

export const Navbar: FunctionComponent<PropsWithClassName> = ({ className }) => {
	return (
		<nav>
			<ul class={className}>
				{Object.keys(routes).map((item) => (
					<li>
						<NavLink title={routes[item].title} pathname={routes[item].path} />
					</li>
				))}
			</ul>
		</nav>
	);
};
