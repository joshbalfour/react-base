import React, { PropTypes } from 'react'


class Input extends React.Component {

	static propTypes = {
		contents: PropTypes.string,
		setContents: PropTypes.func.isRequired,
	}

	constructor(props) {
		super()

		this.state = {
			contents: props.contents,
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.setContents(this.state.contents)
	}

	handleChange = (event) => {
		this.setState({ contents: event.target.value })
	}

	render = () => (
		<form onSubmit={this.handleSubmit}>
			<label htmlFor="value">
				Value:
				<input id="value" value={this.state.contents} onChange={this.handleChange} />
			</label>
			<button>Set</button>
		</form>
	)
}


export default Input
