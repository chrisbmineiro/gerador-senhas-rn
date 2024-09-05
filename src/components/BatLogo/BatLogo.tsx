import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './BatLogoStyle'
import batLogo from '../../../assets/bat-logo.png'

const BatLogo = () => {
  return (
    <>
      <Text style={styles.title}>BatPass Gerador</Text>
      <Image source={batLogo} style={{resizeMode: 'contain', height: 180}} />
    </>
  )
}

export default BatLogo