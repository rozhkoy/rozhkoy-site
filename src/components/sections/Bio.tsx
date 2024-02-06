import type { FunctionComponent } from 'preact';
import { routes } from '../shared/consts/routes';
import { Link } from '../shared/ui/Link';
import { SocialLinks } from '../shared/ui/SocialLinks';
import { Container } from '../shared/ui/Container';

interface BioProps {
	bio: string[];
}

export const Bio: FunctionComponent<BioProps> = ({ bio }) => {
	return (
		<section>
			<Container className='pb-20 pt-12 '>
				<h1 className='text-3xl font-semibold w-full'>About me</h1>

				<h2 className='text-xl font-semibold  mt-16'>A few words to myself</h2>

				{bio.map((item) => (
					<p className='text-zinc-500 mt-4 dark:text-zinc-600'>{item}</p>
				))}

				<div className={'flex justify-between mt-6'}>
					<Link href={routes.projects.path} size={'lg'}>
						See my projects
					</Link>
					<SocialLinks />
				</div>
			</Container>
		</section>
	);
};
