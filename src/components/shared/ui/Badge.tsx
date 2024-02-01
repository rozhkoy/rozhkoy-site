import type { ComponentChildren } from 'preact';

interface BadgeProps {
	children: ComponentChildren;
}

export const Badge = ({ children }: BadgeProps) => {
	return (
		<div
			className={
				'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 '
			}>
			{children}
		</div>
	);
};
