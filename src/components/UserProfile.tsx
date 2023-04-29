import Image from 'next/image';
import { MdOutlineMoreHoriz } from 'react-icons/md';

interface Props {
	firstname: string;
	lastname: string;
	imagePath: string;
}

const UserProfile = ({ firstname, lastname, imagePath }: Props) => (
	<div className="flex items-center justify-between">
		<Image
			src={imagePath}
			alt={`${firstname} ${lastname} avatar`}
			className="mr-3"
			width={32}
			height={32}
		/>
		<span className="text-sm font-semibold mr-[53px]">{`${firstname} ${lastname}`}</span>
		<MdOutlineMoreHoriz className="cursor-pointer rounded-full hover:text-gray-800 hover:border hover:bg-gray-100" />
	</div>
);

export default UserProfile;
