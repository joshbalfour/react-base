import { connect } from 'react-redux'
import actions from 'actions'
import Input from './Input'

function mapStateToProps(state) {
	return {
		contents: state.inputContents,
	}
}

const InputContainer = connect(mapStateToProps, {
	setContents: actions.inputContentsSet,
})(Input)

export default InputContainer
