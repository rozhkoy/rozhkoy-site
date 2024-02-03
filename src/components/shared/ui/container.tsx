import type { ComponentChildren, FunctionComponent } from 'preact';
import { cn } from '../lib/cn';

interface ContainerProps {
	children: ComponentChildren;
	className?: string;
}

export const Container: FunctionComponent<ContainerProps> = ({ children, className }) => {
	return <div className={cn('container mx-auto px-4 ', className)}>{children}</div>;
};
