import React from 'react';

export default class ByClass extends React.Component {
	constructor() {
		super();

		this.state = {
			name: 'Smuj',
			title: 'Dev',
		};
	}

	updateTitle = () => {
		this.setState({ title: 'Owner' });
	};

	render() {
		const { name, title } = this.state;

		return (
			<div>
				<p>Name: {name}</p>
				<p>Title: {title}</p>
				<button type="button" onClick={this.updateTitle}>
					Update title to &quot;Owner&quot;
				</button>
			</div>
		);
	}
}
