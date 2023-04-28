import React, { memo } from 'react';
import Image from 'next/image';
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Legend,
	Symbols,
	Surface,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderLegendText = (text: string) => {
	return (
		<span style={{ color: '#596579', fontWeight: 500, padding: '10px' }}>
			{text}
		</span>
	);
};

const renderLegend = (
	data: any[],
	flags: string[] | undefined,
	socials: string[] | undefined
) => {
	const payload = data.map((item, index) => ({
		id: item.name,
		value: `${item.name} ${item.percent}%`,
		color: COLORS[index % COLORS.length],
		flag: flags && flags[index % flags.length],
		social: socials && socials[index % socials.length],
	}));

	return (
		<ul>
			{payload.map((entry, index) => (
				<li key={`item-${index}`} className="flex items-center">
					{entry.flag && (
						<span className={`fi fi-${entry.flag} rounded`}></span>
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

					{entry.value}
					<Surface width={10} height={10}>
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
		<ResponsiveContainer width="100%" height={400}>
			<PieChart width={800} height={400}>
				<Legend
					content={renderLegend(pieChartData, flags, socials)}
					layout="vertical"
					verticalAlign="middle"
					formatter={renderLegendText}
					align="left"
				/>
				<Pie
					data={pieChartData}
					cx={120}
					cy={200}
					innerRadius={50}
					outerRadius={80}
					fill="#8884d8"
					paddingAngle={0}
					dataKey="value"
					stroke="none"
				>
					{pieChartData.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default memo(PieChartSample);
