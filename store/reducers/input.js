import actionTypes from 'actions/actionTypes'
import Immutable from 'immutable' /* eslint-disable new-cap */

const input = {
	inputContents: (state = '', action) => {
		switch (action.type) {
			case actionTypes.INPUT_CONTENTS_SET:
				return action.contents
			default:
				return state
		}
	},
	inputHistory: (state = Immutable.List(), action) => {
		switch (action.type) {
			case actionTypes.INPUT_CONTENTS_SET:
				return state.push(action.contents)
			default:
				return state
		}
	},
}

export default input
