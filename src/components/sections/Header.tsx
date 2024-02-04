import { Logo } from '../shared/ui/Logo';
import { Navbar } from '../shared/ui/Navbar';

export const Header = () => {
	return (
		<header class='bg-gray-50/80  fixed top-0 left-0 right-0 backdrop-blur-md'>
			<div class='container mx-auto px-4 py-2 flex justify-between items-center'>
				<Logo />
				<Navbar />
			</div>
		</header>
	);
};
