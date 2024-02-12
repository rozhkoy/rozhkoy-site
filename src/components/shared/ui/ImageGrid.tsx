import type { FunctionComponent } from 'preact';

export interface ImageGridProps {
	banner: string;
	firstSlot: string;
	secondSlot: string;
}

export const ImageGrid: FunctionComponent<ImageGridProps> = ({ banner, firstSlot, secondSlot }) => {
	return (
		<section className='mt-4 grid gap-2 grid-cols-1 md:grid-cols-5  grid-rows-2 md:max-h-[570px]'>
			<img className='rounded-md  md:row-start-1 md:row-end-3  md:col-start-1 md:col-end-4 object-cover max-h-[620px] w-full  h-full object-center' src={banner} />
			<img className='rounded-md  object-cover md:row-start-1 md:row-end-2 md:col-start-4 md:col-end-6 h-full w-full object-center' src={firstSlot} />
			<img className='rounded-md  object-cover md:row-start-2 md:row-end-3 md:col-start-4 md:col-end-6 h-full w-full object-center' src={secondSlot} />
		</section>
	);
};
