import React from 'react';
import ByClass from './ByClass';
import ByHook from './ByHook';
import ByRedux from './ByRedux';
import ByContext from './ByContext';

export default function App() {
	return (
		<div className="App">
			<h1>By Class</h1>
			<ByClass />
			<hr />
			<h1>By Hook</h1>
			<ByHook />
			<hr />
			<h1>By Redux</h1>
			<ByRedux />
			<hr />
			<h1>By Hook Context</h1>
			<ByContext />
		</div>
	);
}
