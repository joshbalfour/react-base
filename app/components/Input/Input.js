import React, { PropTypes } from 'react'
import Button from 'react-native-button'
import { View, TextInput } from 'react-native'

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

	handleSubmit = () => {
		this.props.setContents(this.state.contents)
	}

	handleChange = (contents) => {
		this.setState({ contents })
	}

	render = () => (
		<View>
			<TextInput value={this.state.contents} onChangeText={this.handleChange} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
			<Button onPress={this.handleSubmit}>Set</Button>
		</View>
	)
}

export default Input
