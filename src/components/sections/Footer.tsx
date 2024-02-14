import { SocialLinks } from '../shared/ui/SocialLinks';
import { Container } from '../shared/ui/Container';

import { Navbar } from '../shared/ui/Navbar';

export const Footer = () => {
	return (
		<footer class='bg-zinc-50 py-5 sm:py-10  '>
			<Container className='grid sm:grid-cols-2 gap-4 sm:gap-0'>
				<div>
					<h2 className='font-medium text-base sm:text-lg'>Rozhkoy's personal sites</h2>
					<SocialLinks className='mt-3' />
				</div>

				<div className='sm:justify-self-end'>
					<h3 className='font-medium text-m'>Pages</h3>
					<Navbar className='mt-1 gap-y-4' />
				</div>
				<div class='sm:mt-6 flex text-zinc-400 text-xs justify-center items-center sm:col-start-1 sm:col-end-3 text-center sm:text-left'>
					Developed by Rozhko Yaroslav | Copyright © {new Date().getFullYear()}
				</div>
			</Container>
		</footer>
	);
};
