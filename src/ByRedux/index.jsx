import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import ConnectedComponent from './Component';
import store from './store';

export default function ByRedux() {
	return (
		<ReduxProvider store={store}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<ConnectedComponent />
				<ConnectedComponent />
			</div>
		</ReduxProvider>
	);
}
