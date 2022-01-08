import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from './actions';

export function Component(props) {
	const { name, title, updateTitle } = props;

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

Component.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	updateTitle: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
	const { updateTitle } = actions;

	return {
		updateTitle: () => dispatch(updateTitle('Owner')),
	};
}

function mapStateToProps(state) {
	const { name, title } = state;

	return {
		name,
		title,
	};
}

const ConnectedComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);

export default ConnectedComponent;
