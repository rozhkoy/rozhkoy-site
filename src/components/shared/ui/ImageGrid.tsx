export const ImageGrid = () => {
	return (
		<section className='mt-4 grid gap-2 grid-cols-4 grid-rows-2 max-h-[570px]'>
			<img
				className='rounded-md row-start-1 row-end-3  col-start-1 col-end-4 object-cover max-h-[620px] w-full  h-full object-center'
				src={'https://generated.vusercontent.net/placeholder.svg'}
			/>
			<img className='rounded-md object-cover row-start-1 row-end-2 h-full w-full object-center' src={'https://generated.vusercontent.net/placeholder.svg'} />
			<img className='rounded-md object-cover row-start-2 row-end-3 h-full w-full object-center' src={'https://generated.vusercontent.net/placeholder.svg'} />
		</section>
	);
};
