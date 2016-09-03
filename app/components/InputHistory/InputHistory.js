import React, { PropTypes } from 'react'
import Immutable from 'immutable'
import { ListView, View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#F6F6F6',
		marginTop: 5,
	},
	text: {
		flex: 1,
	},
})

const InputHistory = ({ values }) => {
	let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
	ds = ds.cloneWithRows(values.toArray())

	return (
		<View>
			<Text>History:</Text>
			<ListView
				dataSource={ds}
				renderRow={value => (
					<View style={styles.row}>
						<Text style={styles.text}>{value}</Text>
					</View>
				)}
			/>
		</View>
	)
}

InputHistory.propTypes = {
	values: PropTypes.instanceOf(Immutable.List),
}

export default InputHistory
