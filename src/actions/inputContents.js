import actionTypes from './actionTypes'

export default {
	inputContentsSet: (contents) => ({
		type: actionTypes.INPUT_CONTENTS_SET,
		contents,
	}),
}
