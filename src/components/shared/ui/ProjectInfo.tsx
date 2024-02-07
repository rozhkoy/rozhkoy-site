import type { FunctionComponent } from 'preact';
import { Container } from './Container';
import { Github, Globe, Grid } from 'lucide-preact';
import { Link } from './Link';
import { Badge } from './Badge';

interface ProjectInfoProps {
	title: string;
	year?: string;
	github?: string;
	website?: string;
}

export const ProjectInfo: FunctionComponent<ProjectInfoProps> = ({ title, year, github, website }) => {
	return (
		<section>
			<Container className='pt-12'>
				<div className='grid grid-cols-[1fr_fit-content(100%)] gap-x-5'>
					<h1 className='text-3xl font-semibold w-full'>{title}</h1>
					<p class='text-sm mt-1'>{year}</p>
					<div className='flex gap-4 col-start-2 col-end-3 row-start-1 row-end-3 self-center'>
						{github && (
							<Link target='blank' variant={'secondary'} href={github} className='gap-2'>
								Github <Github />
							</Link>
						)}
						{website && (
							<Link target='blank' href={website} className='gap-2'>
								Website <Globe />
							</Link>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};
