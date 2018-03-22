import React from 'react'
import { View, StyleSheet } from 'react-native'

import * as theme from '../utils/theme'

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
    marginHorizontal: theme.space.s * -1,
  },
  btnContainer: {
    flex: 1,
    marginHorizontal: theme.space.s,
  },
})

export default ButtonGroup
