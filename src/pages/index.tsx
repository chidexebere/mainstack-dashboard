import { Info, PageStatistics, PageViews } from '@/components';
import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<ApiDataType> = (apiURL: string) =>
	fetch(apiURL).then((res) => res.json());

const Home = () => {
	const { data, error } = useSWR<ApiDataType, Error>(
		'https://fe-task-api.mainstack.io/',
		fetcher
	);

	if (error) return <Info>Failed to load</Info>;
	if (!data) return <Info>Loading...</Info>;

	const { graph_data, top_locations, top_sources } = data;

	return (
		<div className="">
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
			{data && <PageViews graphData={graph_data} />}

			{data && (
				<PageStatistics topLocations={top_locations} topSources={top_sources} />
			)}
		</div>
	);
};

export default Home;
