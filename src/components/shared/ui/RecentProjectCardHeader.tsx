import { ChevronsRight } from 'lucide-preact';
import { Link } from './Link';
import type { FunctionComponent } from 'preact';

export interface RecentProjectCardHeaderProps {
	title: string;
	slogan: string;
	href: string;
}

export const RecentProjectCardHeader: FunctionComponent<RecentProjectCardHeaderProps> = ({ title, slogan, href }) => {
	return (
		<div className='mt-3 md:mt-4 lg:mt-5 md:gap-x-3  grid xl:grid-cols-[1fr_fit-content(100%)] grid-cols-1 w-full '>
			<h3 className='text-lg  lg:text-2xl font-semibold'>{title}</h3>
			<p className='mt-1 md:mt-2  text-sm md:text-base   md:col-start-1 md:col-end-2 text-zinc-500 dark:text-zinc-400'>{slogan}</p>
			<Link href={href} size={'lg'} className='flex  justify-center align-center  md:col-start-2 md:col-end-3 md:row-[1/3] mt-3 md:mt-0  self-center'>
				Read more
				<ChevronsRight />
			</Link>
		</div>
	);
};
