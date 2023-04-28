import { Area, Pie } from '@/components';
import useSWR, { Fetcher } from 'swr';
import {
	formatToAreaDataType,
	formatToPieDataType,
	getCountryCode,
	getSocialIcons,
} from './api/helper';

const days = [
	'1 Day',
	'3 Days',
	'7 Days',
	'30 Days',
	'All Time',
	'Custom Date',
];

const sampleData = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const fetcher: Fetcher<ApiDataType> = (apiURL: string) =>
	fetch(apiURL).then((res) => res.json());

export default function Home() {
	const { data, error } = useSWR<ApiDataType, Error>(
		'https://fe-task-api.mainstack.io/',
		fetcher
	);

	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

	const { graph_data, top_locations, top_sources } = data;

	return (
		<div className="px-[60px]">
			<section className="mt-6">
				<div className="flex justify-between">
					<div>
						<h1 className="mb-2.5 text-2xl font-extrabold text-[#131316]">
							Good morning, Blessing ⛅️
						</h1>
						<span className="text-sm text-[#31373D]">
							Check out your dashboard summary.
						</span>
					</div>
					<button className="text-sm text-[#FF5403]">View analytics</button>
				</div>
			</section>
			<div className="my-6 flex gap-x-3 items-center">
				{days.map((day, index) => (
					<button
						key={index}
						type="button"
						className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
					>
						{day}
					</button>
				))}
			</div>
			{data && (
				<Area
					areaChartData={formatToAreaDataType(graph_data)}
					xKey="month"
					yKey="views"
				/>
			)}
			{data && (
				<div className="flex items-center">
					<Pie
						pieChartData={formatToPieDataType(top_locations)}
						flags={getCountryCode(top_locations)}
					/>

					<Pie
						pieChartData={formatToPieDataType(top_sources)}
						socials={getSocialIcons(top_sources)}
					/>
				</div>
			)}
		</div>
	);
}
