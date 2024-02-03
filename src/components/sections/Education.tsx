import { Chronology } from '../shared/ui/Chronology';

export const Education = () => {
	const education = [
		{
			title: 'WSB Merito University Poznań',
			from: '06 / 2023',
			to: 'Now',
			description: 'Bachelor of Computer Science',
		},

		{
			title: 'ZSP im. Jana Pawła II',
			from: '06 / 2022',
			to: '05 / 2023',
			description: 'Technical College | Informatics',
		},
	];

	return <Chronology heading='Education' items={education} />;
};
