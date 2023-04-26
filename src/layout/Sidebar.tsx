import { Navbar, UserProfile } from '@/components';
import Image from 'next/image';

const Sidebar = () => (
	<div className="text-[#4D5760]">
		<div className="mt-[32px] ml-[54px]">
			<Image
				src="/mainstack-logo.svg"
				alt="Mainstack Logo"
				className="dark:invert"
				width={40}
				height={40}
				priority
			/>
		</div>
		<div className="mt-[46px] ">
			<Navbar />
		</div>
		<div className="ml-[60px] mt-[196px] mb-[60px] mr-4">
			<UserProfile name="Blessing Daniels" imagePath="/image.svg" />
		</div>
	</div>
);

export default Sidebar;
