import React from 'react';
import ByClass from './ByClass';
import ByHook from './ByHook';
import ByRedux from './ByRedux';
import ByContext from './ByContext';

export default function App() {
	return (
		<div className="App">
			<p>
				<a href="https://github.com/smujmaiku/redux-vs-hooks">Source Code</a>
			</p>
			<hr />
			<h3>By Class</h3>
			<ByClass />
			<hr />
			<h3>By Hook</h3>
			<ByHook />
			<hr />
			<h3>By Redux</h3>
			<ByRedux />
			<hr />
			<h3>By Hook Context</h3>
			<ByContext />
		</div>
	);
}
