import cn from 'classnames';

interface Props {
	text: string | number;
	handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	value?: string | number;
	userClicked?: boolean;
}

const Button = ({ text, handleClick, value, userClicked }: Props) => {
	const buttonClass = cn(
		userClicked
			? 'text-[#FF5403] bg-[#FFEEE5] border-[#FF5403]'
			: 'text-gray-900 bg-white border-gray-300',
		'border focus:outline-none hover:bg-gray-100 font-medium rounded-3xl text-sm text-[#31373D] font-medium px-4 py-3 min-w-fit'
	);
	return (
		<button
			type="button"
			className={buttonClass}
			onClick={handleClick}
			value={value}
		>
			{text}
		</button>
	);
};

export default Button;
