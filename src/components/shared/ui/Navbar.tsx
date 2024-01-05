import { NavLink } from './NavLink';

export const Navbar = () => {
	return (
		<nav>
			<ul class='flex gap-x-4'>
				<li>
					<NavLink title='Home' pathname='/' />
				</li>
				<li>
					<NavLink title='About' pathname='/about' />
				</li>
				<li>
					<NavLink title='Projects' pathname='/projects' />
				</li>
			</ul>
		</nav>
	);
};
