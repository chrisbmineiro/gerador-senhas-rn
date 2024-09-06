import { Text, Image } from 'react-native'
import React from 'react'
import { styles } from './BatLogoStyles'
import batLogo from '../../../assets/bat-logo.png'

const BatLogo = () => {
  return (
    <>
        <Text style={styles.title}>Bat Pass Gerador</Text>
        <Image source={batLogo} style={{resizeMode: 'contain', height: 180, marginBottom: 10}} />
    </>
  )
}

export default BatLogo