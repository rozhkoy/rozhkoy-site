import { ImageGrid } from '../shared/ui/ImageGrid';
import { RecentProjectCardHeader } from '../shared/ui/RecentProjectCardHeader';
import { SectionWithHeading } from '../shared/ui/SectionWithHeading';

export const RecentProjectCard = () => {
	return (
		<SectionWithHeading heading={'Recent Project'} className={'py-9'}>
			<RecentProjectCardHeader />
			<ImageGrid />
		</SectionWithHeading>
	);
};
