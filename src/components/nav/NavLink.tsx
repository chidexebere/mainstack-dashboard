import Link from 'next/link';
import cn from 'classnames';

interface Props {
	title: string;
	slug: string;
	icon?: React.ReactNode;
	isActive?: boolean;
}

const NavLink = ({ title, slug, icon, isActive }: Props) => (
	<li
		className={cn(
			isActive ? 'border-l-2 border-[#FF5403]' : 'border-0',
			'pl-[60px] mb-5 pt-1 pb-0.5 hover:text-gray-800 hover:bg-gray-100'
		)}
	>
		<Link href={slug} className="flex">
			<span className="mr-[12px]">{icon}</span>
			<span className="font-semibold">{title}</span>
		</Link>
	</li>
);

export default NavLink;
