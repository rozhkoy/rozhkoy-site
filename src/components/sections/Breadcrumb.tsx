import { ChevronRight, Home } from 'lucide-preact';
import { Container } from '../shared/ui/Container';

export const Breadcrumb = () => {
	const path = window.location.pathname.split('/');
	path.shift();

	return (
		<section className='mt-20 bg-white/80 sticky top-[60px] py-2  backdrop-blur-md'>
			<Container>
				<nav aria-label='Breadcrumb'>
					<ul class='flex items-center gap-1 text-sm text-gray-600'>
						<li>
							<a href='/' class='block transition hover:text-black'>
								<span class='sr-only'>Home</span>
								<Home size={16} strokeWidth={1} />
							</a>
						</li>
						{path.map((item, index, array) => (
							<>
								<li>
									<ChevronRight size={16} strokeWidth={1} />
								</li>

								<li>
									{array.length - 1 === index ? (
										<span class='block transition first-letter:uppercase'>{item.split('_').join(' ')}</span>
									) : (
										<a href={`/${array.slice(0, index + 1).join('/')}`} class='block transition hover:text-black first-letter:uppercase'>
											{item.split('_').join(' ')}
										</a>
									)}
								</li>
							</>
						))}
					</ul>
				</nav>
			</Container>
		</section>
	);
};
