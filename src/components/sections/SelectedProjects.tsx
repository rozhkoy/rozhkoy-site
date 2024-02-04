import { Button } from '../shared/ui/Button';
import { Link } from '../shared/ui/Link';
import { ProjectCard } from '../shared/ui/ProjectCard';

export const SelectedProjects = () => {
	return (
		<section>
			<div class=' container mx-auto px-4 flex flex-col items-center py-9'>
				<h2 class='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 w-full'>Other projects</h2>
				<ul class='grid grid-cols-3 gap-10 mt-5'>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</ul>
			</div>
		</section>
	);
};
