import Link from 'next/link';
import cn from 'classnames';

interface Props {
	title: string;
	slug: string;
	icon?: React.ReactNode;
	isActive?: boolean;
	handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	value?: string | number;
}

const NavLink = ({
	title,
	slug,
	icon,
	isActive,
	handleClick,
	value,
}: Props) => (
	<li
		className={cn(
			isActive ? 'border-l-2 border-[#FF5403] text-[#FF5403]' : 'border-0',
			'mb-5 pt-1 pb-0.5 hover:text-gray-800 hover:bg-gray-100'
		)}
	>
		<Link href={slug} className="">
			<button className="flex pl-[60px]" onClick={handleClick} value={value}>
				<span className="mr-[12px]">{icon}</span>
				<span className="font-semibold">{title}</span>
			</button>
		</Link>
	</li>
);

export default NavLink;
