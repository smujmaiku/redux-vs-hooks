import React, { useState } from 'react';

export default function ByHook() {
	const [name] = useState('Smuj');
	const [title, setTitle] = useState('Dev');

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
