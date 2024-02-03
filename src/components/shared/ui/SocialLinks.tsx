import { Github, Linkedin, Twitter } from 'lucide-preact';
import { Link } from './Link';
import { cn } from '../lib/cn';
import type { FunctionComponent } from 'preact';

export interface SocialLinksProps {
	className?: string;
}

export const SocialLinks: FunctionComponent<SocialLinksProps> = ({ className }) => {
	return (
		<ul className={cn('flex gap-3', className)}>
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
