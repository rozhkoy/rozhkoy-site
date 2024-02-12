import { useState } from 'preact/hooks';
import { Logo } from '../shared/ui/Logo';
import { Navbar } from '../shared/ui/Navbar';
import { MobileMenuBtn } from '../shared/ui/mobileMenuBtn';

export const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<header class='bg-gray-50/80 shadow-sm fixed top-0 left-0 right-0 backdrop-blur-md z-50 '>
			<div class='container mx-auto px-4 py-2 flex justify-between items-center'>
				<Logo />
				<MobileMenuBtn className={'sm:hidden'} onClick={() => setIsOpen((prev) => !prev)} hide={isOpen} />
				<Navbar
					className={`fixed sm:static translate-x-full sm:translate-x-0 duration-500 transition-transform gap-2  sm:gap-0 py-7 sm:py-0 px-5 ms:px-0  text-2xl sm:text-base  inset-0 sm:inset-auto top-[60px] sm:top-auto flex gap-x-4 flex-col bg-gray-50 sm:bg-transparent h-[100vh] sm:h-auto ${
						isOpen ? 'translate-x-0' : ''
					}  `}
					listClassName='gap-3 flex flex-col sm:flex-row'
				/>
			</div>
		</header>
	);
};
