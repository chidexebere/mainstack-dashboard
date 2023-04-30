import { slide as Menu } from 'react-burger-menu';
import Sidebar from './Sidebar';

interface Props {
	pageWrapId: string;
	outerContainerId: string;
}

const ResponsiveSidebar = ({ pageWrapId, outerContainerId }: Props) => {
	return (
		<Menu>
			<Sidebar />
		</Menu>
	);
};

export default ResponsiveSidebar;
