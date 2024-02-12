interface NavLinkProps {
	title: string;
	pathname: string;
}

export const NavLink = ({ title, pathname }: NavLinkProps) => {
	return (
		<a href={pathname} class={`font-normal  hover:text-black transition-colors ${pathname !== window.location.pathname ? 'text-gray-500' : 'text-black'}`}>
			{title}
		</a>
	);
};
