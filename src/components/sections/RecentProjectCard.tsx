import { ImageGrid, type ImageGridProps } from '../shared/ui/ImageGrid';
import { RecentProjectCardHeader, type RecentProjectCardHeaderProps } from '../shared/ui/RecentProjectCardHeader';
import { SectionWithHeading } from '../shared/ui/SectionWithHeading';

import type { FunctionComponent } from 'preact';

interface RecentProjectCard extends ImageGridProps, RecentProjectCardHeaderProps {}

export const RecentProjectCard: FunctionComponent<RecentProjectCard> = ({ title, slogan, href, banner, firstSlot, secondSlot }) => {
	return (
		<SectionWithHeading heading={'Recent Project'} className={'py-9'}>
			<RecentProjectCardHeader title={title} slogan={slogan} href={href} />
			<ImageGrid banner={banner} secondSlot={secondSlot} firstSlot={firstSlot} />
		</SectionWithHeading>
	);
};
