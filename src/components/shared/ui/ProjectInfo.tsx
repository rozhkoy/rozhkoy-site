import type { FunctionComponent } from 'preact';
import { Container } from './container';
import { Github, Globe, Grid } from 'lucide-preact';
import { Link } from './Link';
import { Badge } from './Badge';

interface ProjectInfoProps {
	title: string;
	description: string;
	year?: string;
	github?: string;
	website?: string;
}

export const ProjectInfo: FunctionComponent<ProjectInfoProps> = ({ title, description, year, github, website }) => {
	return (
		<section>
			<Container className='pt-12'>
				<div className='grid grid-cols-[1fr_fit-content(100%)] gap-x-5'>
					<h1 className='text-3xl font-semibold w-full'>{title}</h1>
					<p class='text-sm mt-1'>{year}</p>
					<div className='flex gap-4 col-start-2 col-end-3 row-start-1 row-end-3 self-center'>
						{github && (
							<Link variant={'secondary'} href={github} className='gap-2'>
								Github <Github />
							</Link>
						)}
						{website && (
							<Link href={github} className='gap-2'>
								Website <Globe />
							</Link>
						)}
					</div>
				</div>
				<div>
					<p className='text-zinc-500 mt-8 dark:text-zinc-600'>{description}</p>

					<ul className='list-disc ml-6 mt-4 gap-2 flex flex-col'>
						<li>
							<b>Online Mode:</b> Battle globally in real-time Tic-Tac-Toe, creating or joining games for internet challenges.
						</li>
						<li>
							<b>Bot Mode:</b> Experience intelligent single-player gameplay with a challenging miniMax algorithm-based AI.
						</li>
						<li>
							<b>Two-Player Mode:</b> Enjoy interactive Tic-Tac-Toe matches with a friend, optimized for engaging two-player interactions.
						</li>
					</ul>
					<div className='flex gap-2 mt-6 items-center'>
						<p>Stack:</p>
						<ul className={'flex flex-wrap gap-2'}>
							<Badge>React</Badge>
							<Badge>TypeScript</Badge>
							<Badge>React</Badge>
							<Badge>Redux</Badge>
							<Badge>React</Badge>
							<Badge>Preact</Badge>
							<Badge>React</Badge>
							<Badge>Astro</Badge>
							<Badge>React</Badge>
							<Badge>Bootstrap</Badge>
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
};
