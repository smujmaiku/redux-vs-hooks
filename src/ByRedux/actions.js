const actions = {
	UPDATE_TITLE: 'UPDATE_TITLE',
	updateTitle: (title) => ({
		type: actions.UPDATE_TITLE,
		payload: title,
	}),
};

export default actions;
