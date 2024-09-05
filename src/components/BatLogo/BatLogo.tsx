import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './BatLogoStyle'
import batLogo from '../../assets/bat-logo.png'

const BatLogo = () => {
  return (
    <View style={styles.container}>
      <Text>BatPass Gerador</Text>
      <Image source={batLogo} />
    </View>
  )
}

export default BatLogo