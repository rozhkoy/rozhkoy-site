import type { FunctionComponent } from 'preact';

export interface ChronologyItemProps {
	title: string;
	description?: string;
	from: string;
	to: string;
	isLast?: boolean;
}

export const ChronologyItem: FunctionComponent<ChronologyItemProps> = ({ title, description, from, to, isLast }) => {
	return (
		<li>
			<div class='flex  items-center'>
				<p>{title}</p>
			</div>
			<p class='text-sm mt-1'>
				{from} - {to !== 'Now' ? to : <span class='text-green-600'>{to}</span>}
			</p>
			{description && <p class='text-zinc-500 dark:text-zinc-400 mt-2'>{description}</p>}
			{!isLast && <div class='border-b border-b-zinc-100 my-6 dark:border-b-zinc-300'></div>}
		</li>
	);
};
