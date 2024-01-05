import { Logo } from '../shared/ui/Logo';
import { Navbar } from '../shared/ui/Navbar';

export const Header = () => {
	return (
		<header class='bg-white shadow-sm'>
			<div class='container mx-auto px-4 py-2 flex justify-between items-center'>
				<Logo />
				<Navbar />
			</div>
		</header>
	);
};
