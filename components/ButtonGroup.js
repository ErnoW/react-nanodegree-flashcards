import React from 'react'
import { View, StyleSheet } from 'react-native'

const ButtonGroup = ({ children }) => {
  return (
    <View style={styles.group}>
      {React.Children.map(children, (child) => <View style={styles.btnContainer}>{child}</View>)}
    </View>
  )
}

const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    height: 50,
  },
  btnContainer: {
    flex: 1,
  },
})

export default ButtonGroup
