import { MdOutlineInfo } from 'react-icons/md';
import Area from './charts/Area';
import { formatToAreaDataType } from '@/pages/api/helper';
import { useState } from 'react';
import Button from './Button';

const days = [
	{ daysInString: '1 Day', daysInNumber: 1 },
	{ daysInString: '3 Days', daysInNumber: 3 },
	{ daysInString: '7 Days', daysInNumber: 7 },
	{ daysInString: '30 Days', daysInNumber: 30 },
	{ daysInString: 'All Time', daysInNumber: 31 },
	{ daysInString: 'Custom Date', daysInNumber: 31 },
];

interface Props {
	graphData: GraphDataType;
}

const PageViews = ({ graphData }: Props) => {
	const formattedData = formatToAreaDataType(graphData);
	const [data, setData] = useState(formattedData);
	const [viewDays, setViewDays] = useState('All Time');

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const { value } = e.target as HTMLButtonElement;

		if (value === 'All Time') {
			setViewDays('All Time');
			setData(data);
		}

		// TODO: To be modified
		if (value == 'Custom Date') {
			setViewDays('Custom Date');
			setData(data);
		}

		setViewDays(value);
		const numberOfDays = days.find(
			(item) => item.daysInString === value
		)?.daysInNumber;
		const dataCopy = formattedData.slice();
		dataCopy.splice(numberOfDays!);
		setData(dataCopy);
	};

	const totalViews = data.reduce((accumulator, object) => {
		return accumulator + object.views;
	}, 0);

	return (
		<>
			<div className="py-6 flex gap-x-3 items-center overflow-x-auto">
				{days.map((day, index) => (
					<Button
						key={`${day.daysInString}${index}`}
						handleClick={handleClick}
						value={day.daysInString}
						text={day.daysInString}
						userClicked={day.daysInString === viewDays}
					/>
				))}
			</div>

			<section className="mb-6 border rounded-xl text-[#131316]">
				<div className=" mt-8 mb-2 mr-6 flex items-center justify-between">
					<h3 className="ml-6 text-[18px] font-extrabold">Page Views</h3>
					<MdOutlineInfo
						className="text-[#31373D] cursor-pointer hover:text-gray-800 "
						size={15}
					/>
				</div>
				<p className="ml-6 mb-6 text-sm text-[#4D5760]">{viewDays}</p>
				<h1 className="ml-6 mb-8 text-5xl font-extrabold">{totalViews}</h1>
				<Area areaChartData={data} xKey="month" yKey="views" />
			</section>
		</>
	);
};

export default PageViews;
