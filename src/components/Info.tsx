interface Props {
	children: React.ReactNode;
}

const Info = ({ children }: Props) => {
	return (
		<div
			className="mt-20 flex justify-center items-center text-2xl text-gray-600"
			role="alert"
			aria-label="loading"
		>
			{children}
		</div>
	);
};

export default Info;
