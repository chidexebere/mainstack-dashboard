import Image from 'next/image';
import { MdOutlineMoreHoriz } from 'react-icons/md';

interface Props {
	name: string;
	imagePath: string;
}

const UserProfile = ({ name, imagePath }: Props) => (
	<div className="flex items-center justify-between">
		<Image
			src={imagePath}
			alt={`${name} avatar`}
			className="mr-3"
			width={32}
			height={32}
		/>
		<span className="text-sm font-semibold mr-[53px]">{name}</span>
		<MdOutlineMoreHoriz />
	</div>
);

export default UserProfile;
