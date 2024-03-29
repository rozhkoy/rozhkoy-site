import { Github, Linkedin, Twitter } from 'lucide-preact';
import { Link } from './Link';
import { cn } from '../lib/cn';
import type { FunctionComponent } from 'preact';
import { socialLinks } from '../../../content/links';

export interface SocialLinksProps {
	className?: string;
}

export const SocialLinks: FunctionComponent<SocialLinksProps> = ({ className }) => {
	return (
		<ul className={cn('flex gap-3', className)}>
			<li>
				<Link target='blank' href={socialLinks.twitter} variant={'ghost'} size={'icon'}>
					<span className='sr-only'>twitter</span>
					<Twitter />
				</Link>
			</li>
			<li>
				<Link target='blank' href={socialLinks.linkedIn} variant={'ghost'} size={'icon'}>
					<span className='sr-only'>Linkedin</span>
					<Linkedin />
				</Link>
			</li>
			<li>
				<Link target='blank' href={socialLinks.github} variant={'ghost'} size={'icon'}>
					<span className='sr-only'>github</span>
					<Github />
				</Link>
			</li>
		</ul>
	);
};
