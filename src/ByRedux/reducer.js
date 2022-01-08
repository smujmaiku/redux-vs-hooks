import actions from './actions';

const initState = {
	name: 'Smuj',
	title: 'Dev',
};

export default function reducer(state = initState, action = {}) {
	const { type, payload } = action;

	switch (type) {
		case actions.UPDATE_TITLE:
			return {
				...state,
				title: payload,
			};
		default:
	}
	return state;
}
