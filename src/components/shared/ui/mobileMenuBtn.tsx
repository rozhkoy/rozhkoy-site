import type { FunctionComponent } from 'preact';
import { Button } from './Button';
import type { PropsWithClassName } from '../type/PropsWithClassName';
import { cn } from '../lib/cn';

interface MobileMenuBtnProps extends PropsWithClassName {
	onClick: () => void;
	hide: boolean;
}

export const MobileMenuBtn: FunctionComponent<MobileMenuBtnProps> = ({ onClick, hide, className }) => {
	return (
		<button onClick={onClick} className={cn('grid justify-center  grid-cols-3 grid-rows-3 gap-[6px] p-1', className)}>
			<span className='bg-black rounded-sm block w-[6px] h-[6px]'></span>
			<span className={`bg-black transition-opacity duration-500 rounded-sm block w-[6px] h-[6px] ${hide && 'opacity-0'}`}></span>
			<span className='bg-black rounded-sm block w-[6px] h-[6px]'></span>

			<span className={`bg-black transition-opacity duration-500 rounded-sm block w-[6px] h-[6px] ${hide && 'opacity-0'}`}></span>
			<span className='bg-black rounded-sm block w-[6px] h-[6px]'></span>
			<span className={`bg-black transition-opacity duration-500 rounded-sm block w-[6px] h-[6px] ${hide && 'opacity-0'}`}></span>

			<span className='bg-black transition-opacity duration-500 rounded-sm block w-[6px] h-[6px]'></span>
			<span className={`bg-black rounded-sm block w-[6px] h-[6px] ${hide && 'opacity-0'}`}></span>
			<span className='bg-black transition-opacity duration-500 rounded-sm block w-[6px] h-[6px]'></span>
		</button>
	);
};
