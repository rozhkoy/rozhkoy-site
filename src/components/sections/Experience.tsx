import { Chronology } from '../shared/ui/Chronology';

export const Experience = () => {
	const experience = [
		{
			title: 'Chronology',
			from: '06 / 2023',
			to: 'Now',
			description: " import { Chronology } from '../shared/ui/Chronology';",
		},

		{
			title: 'Alibaba',
			from: '06 / 2022',
			to: '05 / 2023',
			description: " import { Chronology } from '../shared/ui/Chronology';",
		},
	];

	return <Chronology heading='Experience' items={experience} />;
};
