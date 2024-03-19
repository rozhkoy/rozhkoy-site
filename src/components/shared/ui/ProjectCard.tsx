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
		<article className='group p-2 shadow-lg bg-white rounded-md'>
			<div class=' max-w-[360px] max-h-[225px] overflow-hidden relative'>
				<img
					className='rounded-md object-contain row-start-2 row-end-3  object-center max-h-[225px] w-full shadow-lg  transition duration-500'
					src={img}
					alt={title}
					width='360'
					height='225'
				/>
				<div class='absolute opacity-0 bg-white/90 p-3 top-0 h-full w-full group-hover:opacity-100 transition-opacity '>
					<p>{slogan}</p>
					<ul className={'flex flex-wrap gap-2 mt-3'}>
						{stack.map((item) => (
							<Badge>{item}</Badge>
						))}
					</ul>
				</div>
			</div>
			<div>
				<h3 className={'mt-5 scroll-m-20 text-2xl font-semibold tracking-tight'}>{title}</h3>

				<Link href={href} target='blank' className={'w-full mt-3  gap-2'}>
					Visit Website <ExternalLink size={16} />
				</Link>
			</div>
		</article>
	);
};
