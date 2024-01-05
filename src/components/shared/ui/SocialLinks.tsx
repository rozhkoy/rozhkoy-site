import { Github, Linkedin, Twitter } from 'lucide-preact';
import { Link } from './Link';

export const SocialLinks = () => {
	return (
		<ul class='flex py-10 gap-3 justify-center'>
			<li>
				<Link variant={'ghost'} size={'icon'}>
					<Twitter />
				</Link>
			</li>
			<li>
				<Link variant={'ghost'} size={'icon'}>
					<Linkedin />
				</Link>
			</li>
			<li>
				<Link variant={'ghost'} size={'icon'}>
					<Github />
				</Link>
			</li>
		</ul>
	);
};
