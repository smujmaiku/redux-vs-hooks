import React from 'react';
import { Provider as StoreProvider } from './store';
import Component from './Component';

export default function ByContext() {
	return (
		<StoreProvider>
			<Component />
		</StoreProvider>
	);
}
