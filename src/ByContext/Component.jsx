import React from 'react';
import useStore from './store';

export default function Component() {
	const { name, title, setTitle } = useStore();

	const updateTitle = () => {
		setTitle('Owner');
	};

	return (
		<div>
			<p>Name: {name}</p>
			<p>Title: {title}</p>
			<button type="button" onClick={updateTitle}>
				Update title to &quot;Owner&quot;
			</button>
		</div>
	);
}
