interface NavLinkProps {
	title: string;
	pathname: string;
}

export const NavLink = ({ title, pathname }: NavLinkProps) => {
	return (
		<a href='/' class={`text-m font-normal hover:text-black transition-colors ${pathname !== window.location.pathname && 'text-gray-500'}`}>
			{title}
		</a>
	);
};
