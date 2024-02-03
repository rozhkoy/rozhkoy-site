import { Link } from '../shared/ui/Link';
import { SocialLinks } from '../shared/ui/SocialLinks';
import { Container } from '../shared/ui/container';

export const Bio = () => {
	return (
		<section>
			<Container className='pb-20 pt-40 '>
				<h1 className='text-3xl font-semibold w-full'>About me</h1>

				<h2 className='text-xl font-semibold  mt-16'>A few words to myself</h2>

				<p className='text-zinc-500 mt-4 dark:text-zinc-600'>
					I'm a front-end developer with a passion for web development. Over the past 3 years, I have been dedicated to honing my skills in this dynamic field. My journey began in the world
					of freelancing, where I embarked on the exciting path of creating web solutions.
				</p>
				<p className='text-zinc-500 mt-4 dark:text-zinc-600'>
					Currently enrolled at WSB Merito University, I am actively deepening my knowledge and staying abreast of the latest developments in web development. Always open to new ideas and
					opportunities, I approach every project with enthusiasm, fueled by my continuous commitment to learning and growing in web development."
				</p>
				<div className={'flex justify-between mt-6'}>
					<Link size={'lg'}>See my projects</Link>
					<SocialLinks />
				</div>
			</Container>
		</section>
	);
};
