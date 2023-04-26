import {
	MdOutlineAddAPhoto,
	MdOutlineAlarm,
	MdOutlineDashboard,
	MdOutlineDelete,
	MdOutlineEdit,
	MdOutlineFilePresent,
	MdOutlineGroup,
	MdOutlineSubscriptions,
} from 'react-icons/md';
import { AiOutlineHourglass } from 'react-icons/ai';
import NavLink from './NavLink';

const navigation = [
	{ title: 'Dashboard', iconName: 'MdOutlineDashboard', slug: './' },
	{ title: 'Item 1', iconName: 'MdOutlineEdit', slug: './item-1' },
	{ title: 'Item 2', iconName: 'MdOutlineGroup', slug: './item-2' },
	{ title: 'Item 3', iconName: 'AiOutlineHourglass', slug: './item-3' },
];

const others1 = [
	{ title: 'Item 4', iconName: 'MdOutlineAddAPhoto', slug: './item-4' },
	{ title: 'Item 5', iconName: 'MdOutlineDelete', slug: './item-5' },
];

const others2 = [
	{ title: 'Item 6', iconName: 'MdOutlineSubscriptions', slug: './item-6' },
	{ title: 'Item 7', iconName: 'MdOutlineFilePresent', slug: './item-7' },
	{ title: 'Item 8', iconName: 'MdOutlineAlarm', slug: './item-8' },
];

const stringToComponent = (iconName: string) => {
	switch (iconName) {
		case 'MdOutlineDashboard':
			return <MdOutlineDashboard className="font-thin w-5 h-5" />;
		case 'MdOutlineEdit':
			return <MdOutlineEdit className="font-thin w-5 h-5" />;
		case 'MdOutlineGroup':
			return <MdOutlineGroup className="font-thin w-5 h-5" />;
		case 'AiOutlineHourglass':
			return <AiOutlineHourglass className="font-thin w-5 h-5" />;
		case 'MdOutlineAddAPhoto':
			return <MdOutlineAddAPhoto className="font-thin w-5 h-5" />;
		case 'MdOutlineDelete':
			return <MdOutlineDelete className="font-thin w-5 h-5" />;
		case 'MdOutlineSubscriptions':
			return <MdOutlineSubscriptions className="font-thin w-5 h-5" />;
		case 'MdOutlineFilePresent':
			return <MdOutlineFilePresent className="font-thin w-5 h-5" />;
		case 'MdOutlineAlarm':
			return <MdOutlineAlarm className="font-thin w-5 h-5" />;
		default:
			return null;
	}
};
const Navbar = () => (
	<ul className="text-base">
		{navigation.map((item) => (
			<NavLink
				key={item.title}
				title={item.title}
				slug={item.slug}
				icon={stringToComponent(item.iconName)}
				isActive={true}
			/>
		))}
		<div>
			<h4 className="ml-[60px] mt-[6px] mb-[22px] text-xs uppercase">
				others 1
			</h4>
			{others1.map((item) => (
				<NavLink
					key={item.title}
					title={item.title}
					slug={item.slug}
					icon={stringToComponent(item.iconName)}
				/>
			))}
		</div>
		<div>
			<h4 className="ml-[60px] mt-[6px] mb-[22px] text-xs uppercase">
				others 2
			</h4>
			{others2.map((item) => (
				<NavLink
					key={item.title}
					title={item.title}
					slug={item.slug}
					icon={stringToComponent(item.iconName)}
				/>
			))}
		</div>
	</ul>
);

export default Navbar;
