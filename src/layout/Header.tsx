interface Props {
	title: string;
}

const Header = ({ title }: Props) => (
	<div className="py-[22px]">
		<h2 className="text-xl font-extrabold text-[#131316]">{title}</h2>
	</div>
);

export default Header;
