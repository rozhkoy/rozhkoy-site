import { SocialLinks } from '../shared/ui/SocialLinks';

export const Hero = () => {
	return (
		<section class='py-20'>
			<div class='container mx-auto px-4'>
				<h1
					class='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl
    xl:text-[3.4rem] 2xl:text-[3.75rem] animated-text text-center'>
					Hi, I'm Rozhko Yaroslav
				</h1>
				<p class='text-lg font-normal text-gray-900 mt-5 text-center'>Front-end developer with some cool personal projects.</p>
				<SocialLinks />
			</div>
		</section>
	);
};
