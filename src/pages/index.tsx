import { Area, Pie } from '@/components';
import useSWR, { Fetcher } from 'swr';
import {
	formatToAreaDataType,
	formatToPieDataType,
	getCountryCode,
	getSocialIcons,
} from './api/helper';
import { MdOutlineInfo } from 'react-icons/md';

const days = [
	'1 Day',
	'3 Days',
	'7 Days',
	'30 Days',
	'All Time',
	'Custom Date',
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
						<p className="text-sm text-[#31373D]">
							Check out your dashboard summary.
						</p>
					</div>
					<button className="text-sm text-[#FF5403] hover:text-amber-700">
						View analytics
					</button>
				</div>
			</section>
			<div className="my-6 flex gap-x-3 items-center">
				{days.map((day, index) => (
					<button
						key={index}
						type="button"
						className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-3xl text-sm text-[#31373D] font-medium px-4 py-3"
					>
						{day}
					</button>
				))}
			</div>
			{data && (
				<section className="mb-6 border rounded-xl text-[#131316]">
					<div className=" mt-8 mb-2 mr-6 flex items-center justify-between">
						<h3 className="ml-6 text-[18px] font-extrabold">Page Views</h3>
						<MdOutlineInfo className="text-[#31373D]" size={15} />
					</div>
					<p className="ml-6 mb-6 text-sm text-[#4D5760]">All time</p>
					<h1 className="ml-6 mb-8 text-5xl font-extrabold">500</h1>
					<Area
						areaChartData={formatToAreaDataType(graph_data)}
						xKey="month"
						yKey="views"
					/>
				</section>
			)}
			{data && (
				<div className="flex items-center justify-between gap-x-4 mb-11">
					<section className="w-full border rounded-xl">
						<div className=" mx-6 mt-8 flex items-center justify-between">
							<h3 className="text-[18px] font-extrabold">Top Locations</h3>
							<button className="text-sm text-[#FF5403] hover:text-amber-700">
								View full reports
							</button>
						</div>
						<Pie
							pieChartData={formatToPieDataType(top_locations)}
							flags={getCountryCode(top_locations)}
						/>
					</section>
					<section className="w-full border rounded-xl">
						<div className=" mx-6 mt-8 flex items-center justify-between">
							<h3 className="text-[18px] font-extrabold">
								Top Referral source
							</h3>
							<button className="text-sm text-[#FF5403] hover:text-amber-700">
								View full reports
							</button>
						</div>
						<Pie
							pieChartData={formatToPieDataType(top_sources)}
							socials={getSocialIcons(top_sources)}
						/>
					</section>
				</div>
			)}
		</div>
	);
}
