import { useStateContext } from '@/contexts/ContextProvider';

const Header = () => {
	const { headerTitle } = useStateContext();
	return (
		<div className="py-[22px]">
			<h2 className="text-xl font-extrabold text-[#131316]">{headerTitle}</h2>
		</div>
	);
};

export default Header;
