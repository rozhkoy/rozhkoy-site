import type { FunctionComponent } from 'preact';

export interface ImageGridProps {
	banner: string;
	firstSlot: string;
	secondSlot: string;
}

export const ImageGrid: FunctionComponent<ImageGridProps> = ({ banner, firstSlot, secondSlot }) => {
	return (
		<section className='mt-4 grid gap-2 grid-cols-5 grid-rows-2 max-h-[570px]'>
			<img className='rounded-md row-start-1 row-end-3  col-start-1 col-end-4 object-cover max-h-[620px] w-full  h-full object-center' src={banner} />
			<img className='rounded-md object-cover row-start-1 row-end-2 col-start-4 col-end-6 h-full w-full object-center' src={firstSlot} />
			<img className='rounded-md object-cover row-start-2 row-end-3 col-start-4 col-end-6 h-full w-full object-center' src={secondSlot} />
		</section>
	);
};
