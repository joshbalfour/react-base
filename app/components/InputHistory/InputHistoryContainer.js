import { connect } from 'react-redux'
import InputHistory from './InputHistory'

function mapStateToProps(state) {
	return {
		values: state.inputHistory,
	}
}

const InputHistoryContainer = connect(mapStateToProps, {})(InputHistory)

export default InputHistoryContainer
