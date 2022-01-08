import PropTypes from 'prop-types';
import React, { createContext, useContext, useMemo, useState } from 'react';

const context = createContext();

export default function useStore() {
	return useContext(context);
}

export function Provider(props) {
	const { children } = props;

	const [name] = useState('Smuj');
	const [title, setTitle] = useState('Dev');

	const value = useMemo(
		() => ({
			name,
			title,
			setTitle,
		}),
		[name, title, setTitle]
	);

	return <context.Provider value={value}>{children}</context.Provider>;
}

Provider.propTypes = {
	children: PropTypes.node.isRequired,
};
