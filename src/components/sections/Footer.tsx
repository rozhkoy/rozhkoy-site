import { NavLink } from '../shared/ui/NavLink';
import { SocialLinks } from '../shared/ui/SocialLinks';
import { Container } from '../shared/ui/container';

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
					<nav>
						<ul class='mt-1 gap-y-4'>
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
				</div>
				<div class='mt-6 flex justify-center items-center col-start-1 col-end-3'>Developed by Rozhko Yaroslav | Copyright © {new Date().getFullYear()}</div>
			</Container>
		</footer>
	);
};
