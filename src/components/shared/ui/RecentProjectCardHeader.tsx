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
		<div className=' mt-5 grid grid-cols-[1fr_fit-content(100%)] w-full'>
			<h3 className='text-2xl font-semibold'>{title}</h3>
			<p className='mt-2 col-start-1 col-end-2 text-zinc-500 dark:text-zinc-400'>{slogan}</p>
			<Link href={href} target='self' size={'lg'} className='flex  justify-center align-center col-start-2 col-end-3 row-[1/3] self-center'>
				Read more
				<ChevronsRight />
			</Link>
		</div>
	);
};
