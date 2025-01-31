import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { theme } from '../core/theme'

type Props = {
    text: string
} & React.ComponentProps<typeof TouchableOpacity>


const CustomButton = ( { text , ...props }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...props} style={styles.button}>
        <Text style={styles.text} > {text} </Text>
      </TouchableOpacity>
    </View>
  )
}

export default memo(CustomButton);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
    },

    text: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        color: theme.colors.surface
    },

    button : {
        backgroundColor: theme.colors.primary,
        padding: 8,
        borderRadius: 6,
    }
})