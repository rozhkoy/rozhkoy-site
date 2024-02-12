import type { ComponentChildren, FunctionComponent } from 'preact';
import { cn } from '../lib/cn';

interface SectionWithHeadingProps {
	children: ComponentChildren;
	heading: string;
	className?: string;
}

export const SectionWithHeading: FunctionComponent<SectionWithHeadingProps> = ({ children, heading, className }) => {
	return (
		<section className={cn(className)}>
			<div class='container mx-auto px-4 flex flex-col items-center '>
				<h2 class='border-b md:pb-1 xl:pb-2 text-2xl md:text-3xl  xl:text-3xl font-semibold tracking-tight transition-colors first:mt-0 w-full'>{heading}</h2>
				{children}
			</div>
		</section>
	);
};
