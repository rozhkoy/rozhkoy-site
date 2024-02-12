import type { FunctionComponent, PropsWithChildren } from 'preact/compat';
import type { PropsWithClassName } from '../type/PropsWithClassName';
import { Container } from './Container';
import { DiscAlbum } from 'lucide-preact';
import { ChronologyItem, type ChronologyItemProps } from './ChronologyItem';

export interface ChronologyProps extends PropsWithClassName, PropsWithChildren {
	heading: string;
	items: ChronologyItemProps[];
}

export const Chronology: FunctionComponent<ChronologyProps> = ({ heading, items }) => {
	return (
		<section className='py-5 sm:py-9'>
			<Container className='sm:grid sm:grid-cols-[150px_1fr]'>
				<div>
					<h2 className='font-medium text-lg sm:text-lx'>{heading}</h2>
				</div>
				<ul className='col-start-2 col-end-5 list-none mt-5 sm:mt-0'>
					{items.map((item, index, array) => {
						return <ChronologyItem {...item} isLast={index == array.length - 1} />;
					})}
				</ul>
			</Container>
		</section>
	);
};
