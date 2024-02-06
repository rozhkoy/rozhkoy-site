import { type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'preact/compat';
import type { ComponentChildren, JSX } from 'preact';
import { cn } from '../lib/cn';
import { buttonVariants } from './Button';

export interface LinksProps extends VariantProps<typeof buttonVariants> {
	className?: string;
	children: ComponentChildren;
	target: string;
	href: string;
}

const Link = forwardRef<HTMLAnchorElement, LinksProps>(({ className, variant, size, children, ...props }, ref) => {
	return (
		<a className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
			{children}
		</a>
	);
});
Link.displayName = 'Button';

export { Link };
