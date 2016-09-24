import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	button: {
		padding: 10,
		height: 45,
		overflow: 'hidden',
		borderRadius: 4,
		backgroundColor: 'white',
	},
})

const Home = () => (
	<View style={styles.container}>
		<Text style={styles.welcome}>Welcome to Home</Text>
		<Button onPress={Actions.view2} containerStyle={styles.button}>Go to View 2</Button>
	</View>
)

export default Home
