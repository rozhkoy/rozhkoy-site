import { NavLink } from '../shared/ui/NavLink';
import { SocialLinks } from '../shared/ui/SocialLinks';
import { Container } from '../shared/ui/Container';
import { routes } from '../shared/consts/routes';
import { Navbar } from '../shared/ui/Navbar';

export const Footer = () => {
	return (
		<footer class='bg-zinc-50 py-10  '>
			<Container className='grid grid-cols-2'>
				<div>
					<h2 className='font-medium text-lg'>Rozhkoy's personal sites</h2>
					<SocialLinks className='mt-3' />
				</div>

				<div className='justify-self-end'>
					<h3 className='font-medium text-m'>Pages</h3>
					<Navbar className='mt-1 gap-y-4' />
				</div>
				<div class='mt-6 flex justify-center items-center col-start-1 col-end-3'>Developed by Rozhko Yaroslav | Copyright © {new Date().getFullYear()}</div>
			</Container>
		</footer>
	);
};
