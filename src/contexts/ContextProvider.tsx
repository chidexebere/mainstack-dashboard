import React, { createContext, useContext, useState } from 'react';

interface Props {
	children: React.ReactNode;
}

const initialState = {
	headerTitle: 'Dashboard',
	setHeaderTitle: () => undefined,
};

const StateContext = createContext<AppContextState>(initialState);

export const ContextProvider = ({ children }: Props) => {
	const [headerTitle, setHeaderTitle] = useState('Dashboard');

	return (
		<StateContext.Provider
			value={{
				headerTitle,
				setHeaderTitle,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
