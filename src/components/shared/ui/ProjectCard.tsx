import { ChevronsRight } from 'lucide-preact';
import { Badge } from './Badge';
import { Link } from './Link';

export const ProjectCard = () => {
	return (
		<article>
			<img className='rounded-md object-contain row-start-2 row-end-3  w-full object-center' src={'https://generated.vusercontent.net/placeholder.svg'} />
			<div className=''>
				<h3 className={'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'}>Best tic-tac-toe</h3>
				<p className={'mb-6 text-zinc-500 dark:text-zinc-400'}>The "Best tic-tac-toe" project is an interactive web game that combines three exciting</p>

				<ul className={'flex flex-wrap gap-2 mt-3'}>
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
				<Link className={'w-full mt-3'}>
					Visit site <ChevronsRight />
				</Link>
			</div>
		</article>
	);
};
