import React, { memo } from 'react';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

interface Props {
	areaChartData: any[];
	xKey: string;
	yKey: string;
}

const AreaChartSample = ({ areaChartData, xKey, yKey }: Props) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<AreaChart
				data={areaChartData}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#FF5403" stopOpacity={0.2} />
						<stop offset="100%" stopColor="#FF5403" stopOpacity={0} />
					</linearGradient>
				</defs>
				<CartesianGrid strokeDasharray="3 3" opacity={0.5} vertical={false} />
				<XAxis dataKey={xKey} />
				<YAxis />
				<Tooltip />
				<Area
					type="monotone"
					dataKey={yKey}
					stroke="#FF5403"
					fillOpacity={1}
					fill="url(#colorUv)"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default memo(AreaChartSample);
