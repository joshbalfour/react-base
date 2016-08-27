import React, { PropTypes } from 'react'
import Immutable from 'immutable'

const InputHistory = ({ values }) => (
	<div>
		<h3>History:</h3>
		<ul>
			{values.map((value, key) => <li key={key}>{value}</li>)}
		</ul>
	</div>
)

InputHistory.propTypes = {
	values: PropTypes.instanceOf(Immutable.List),
}

export default InputHistory
