import { Navbar, UserProfile } from '@/components';
import Image from 'next/image';

const Sidebar = () => (
	<div className="text-[#4D5760]">
		<div className="mt-9 ml-[54px]">
			<Image
				src="/mainstack-logo.svg"
				alt="Mainstack Logo"
				className="dark:invert"
				width={40}
				height={40}
				priority
			/>
		</div>
		<div className="mt-10">
			<Navbar />
		</div>
		<div className="ml-[60px] mt-[176px] mb-[60px] mr-4">
			<UserProfile
				firstname="Blessing"
				lastname="Daniels"
				imagePath="/image.svg"
			/>
		</div>
	</div>
);

export default Sidebar;
