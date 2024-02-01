import { ChevronRight } from 'lucide-preact';
import { Badge } from './Badge';
import { Button } from './Button';

export const ProjectCard = () => {
	return (
		<article>
			<img src={'https://generated.vusercontent.net/placeholder.svg'} />
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
				<Button className={'w-full mt-3'}>
					Read more <ChevronRight />
				</Button>
			</div>
		</article>
	);
};
