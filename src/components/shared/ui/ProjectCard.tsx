import { ExternalLink } from 'lucide-preact';
import { Badge } from './Badge';
import { Link } from './Link';
import type { FunctionComponent } from 'preact';

interface ProjectCardProps {
	title: string;
	slogan: string;
	stack: string[];
	href: string;
	img: string;
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({ title, slogan, stack, href, img }) => {
	return (
		<article className='p-2 shadow-lg bg-white rounded-md'>
			<div class='max-w-[360px] max-h-[225px] overflow-hidden'>
				<img
					className='rounded-md object-contain row-start-2 row-end-3  object-center max-h-[225px] w-full shadow-lg hover:scale-125 transition duration-500'
					src={img}
					width='360'
					height='225'
				/>
			</div>
			<div>
				<h3 className={'mt-5 scroll-m-20 text-2xl font-semibold tracking-tight'}>{title}</h3>
				{/* <p className={' text-zinc-500 dark:text-zinc-400'}>{slogan}</p>

				<ul className={'flex flex-wrap gap-2 mt-3'}>
					{stack.map((item) => (
						<Badge>{item}</Badge>
					))}
				</ul> */}
				<Link href={href} target='blank' className={'w-full mt-3  gap-2'}>
					Visit Website <ExternalLink size={16} />
				</Link>
			</div>
		</article>
	);
};
