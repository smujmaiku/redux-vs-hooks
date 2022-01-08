import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import ConnectedComponent from './Component';
import store from './store';

export default function ByRedux() {
	return (
		<ReduxProvider store={store}>
			<ConnectedComponent />
		</ReduxProvider>
	);
}
