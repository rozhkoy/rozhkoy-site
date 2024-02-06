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
		<section className='py-9'>
			<Container className='grid grid-cols-5'>
				<div>
					<h2 className='font-medium text-lg'>{heading}</h2>
				</div>
				<ul className='col-start-2 col-end-6 list-none '>
					{items.map((item, index, items) => {
						return <ChronologyItem {...item} isLast={index == items.length - 1} />;
					})}
				</ul>
			</Container>
		</section>
	);
};
