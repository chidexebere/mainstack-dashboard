import {
	formatToPieDataType,
	getCountryCode,
	getSocialIcons,
} from '@/pages/api/helper';
import Pie from './Charts/Pie';

interface Props {
	topLocations: TopLocationDataType[];
	topSources: TopSourceDataType[];
}

const PageStatistics = ({ topLocations, topSources }: Props) => {
	return (
		<div className="flex items-center justify-between gap-x-4 mb-11">
			<section className="w-full border rounded-xl">
				<div className=" mx-6 mt-8 flex items-center justify-between">
					<h3 className="text-[18px] font-extrabold">Top Locations</h3>
					<button className="text-sm text-[#FF5403] hover:text-amber-700">
						View full reports
					</button>
				</div>
				<Pie
					pieChartData={formatToPieDataType(topLocations)}
					flags={getCountryCode(topLocations)}
				/>
			</section>
			<section className="w-full border rounded-xl">
				<div className=" mx-6 mt-8 flex items-center justify-between">
					<h3 className="text-[18px] font-extrabold">Top Referral source</h3>
					<button className="text-sm text-[#FF5403] hover:text-amber-700">
						View full reports
					</button>
				</div>
				<Pie
					pieChartData={formatToPieDataType(topSources)}
					socials={getSocialIcons(topSources)}
				/>
			</section>
		</div>
	);
};

export default PageStatistics;
