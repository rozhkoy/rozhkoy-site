import { SocialLinks } from '../shared/ui/SocialLinks';

export const Hero = () => {
	return (
		<section class='pb-5 pt-20 sm:pt-10 lg:pb-20 lg:pt-40 '>
			<div class='container mx-auto px-4'>
				<h1
					class='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl
    lg:text-7xl  animated-text text-center'>
					Hi, I'm Rozhko Yaroslav
				</h1>
				<p class=' text-sm sm:text-base lg:text-lg  font-normal text-gray-900  text-center mt-2  sm:mt-3 lg:mt-5 '>Front-end developer with some cool personal projects.</p>
				<SocialLinks className='mt-3 justify-center sm:mt-5   lg:mt-8' />
			</div>
		</section>
	);
};
