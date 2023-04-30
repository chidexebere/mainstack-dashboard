import { memo } from 'react';
import Image from 'next/image';
import { PieChart, Pie, Cell, Legend, Symbols, Surface } from 'recharts';

const COLORS = ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468'];

const renderLegend = (
	data: any[],
	flags: string[] | undefined,
	socials: string[] | undefined
) => {
	const payload = data.map((item, index) => ({
		id: item.name,
		value: `${item.name}`,
		percent: `${item.percent}%`,
		color: COLORS[index % COLORS.length],
		flag: flags && flags[index % flags.length],
		social: socials && socials[index % socials.length],
	}));

	return (
		<ul>
			{payload.map((entry, index) => (
				<li
					key={`item-${index}`}
					className="flex items-center gap-x-2 ml-6 mb-5 text-base text-[#131316]"
				>
					{entry.flag && (
						<span className={`fi fi-${entry.flag} w-5 rounded`}></span>
					)}
					{entry.social && (
						<Image
							src={entry.social}
							alt="social-icon"
							className=""
							width={20}
							height={20}
						/>
					)}
					<span>{entry.value}</span>
					<span className="font-semibold">{entry.percent}</span>
					<Surface width={10} height={10} className="w-3 h-3">
						<Symbols cx={5} cy={5} type="circle" size={50} fill={entry.color} />
					</Surface>
				</li>
			))}
		</ul>
	);
};

interface Props {
	pieChartData: any[];
	flags?: string[];
	socials?: string[];
}

const PieChartSample = ({ pieChartData, flags, socials }: Props) => {
	return (
		<PieChart width={500} height={300}>
			<Legend
				content={renderLegend(pieChartData, flags, socials)}
				layout="vertical"
				verticalAlign="middle"
				align="left"
			/>
			<Pie
				data={pieChartData}
				cx="50%"
				cy="50%"
				innerRadius={50}
				outerRadius={80}
				fill="#8884d8"
				dataKey="value"
				stroke="none"
			>
				{pieChartData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
		</PieChart>
	);
};

export default memo(PieChartSample);
