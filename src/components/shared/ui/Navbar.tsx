import type { FunctionComponent } from 'preact';
import { routes } from '../consts/routes';
import { NavLink } from './NavLink';
import type { PropsWithClassName } from '../type/PropsWithClassName';

export interface NavbarProps extends PropsWithClassName {
	listClassName?: string;
}

export const Navbar: FunctionComponent<NavbarProps> = ({ className, listClassName }) => {
	return (
		<nav class={className}>
			<ul className={listClassName}>
				{Object.keys(routes).map((item) => (
					<li>
						<NavLink title={routes[item].title} pathname={routes[item].path} />
					</li>
				))}
			</ul>
		</nav>
	);
};
