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
			<Container className='pt-6 sm:pt-12'>
				<div className='grid sm:grid-cols-[1fr_fit-content(100%)] gap-x-3'>
					<h1 className='text-3xl font-semibold w-full'>{title}</h1>
					<p class='text-sm mt-1'>{year}</p>
					<div className='flex gap-4 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 self-center mt-4 sm:mt-0'>
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
