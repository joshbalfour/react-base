import inputContents from 'actions/inputContents'
import actionTypes from 'actions/actionTypes'

describe('actions/inputContents', () => {
	describe('inputContentsSet', () => {
		it('should return an `INPUT_CONTENTS_SET` action', () => {
			const result = inputContents.inputContentsSet()
			expect(result.type).toBe(actionTypes.INPUT_CONTENTS_SET)
		})
		it('should map the arguments to the contents property of the action', () => {
			const argument = 'testing123'
			const result = inputContents.inputContentsSet(argument)
			expect(result.contents).toBe(argument)
		})
	})
})
