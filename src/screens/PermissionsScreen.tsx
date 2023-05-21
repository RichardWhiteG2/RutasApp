import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { PermissionsContext } from '../context/PermissionsContext'
import { BlackButton } from '../components/BlackButton'

export const PermissionsScreen = () => {
  const  { permissions, askLocationPermission } = useContext(PermissionsContext)
  
  return (

    <View style= {styles.container}>
        <Text style={styles.title}>Es necesario el permiso del GPS para usar esta aplicacion</Text>
        <BlackButton
          title='Permiso'
          onPress={askLocationPermission} 
        />
        <Text>{JSON.stringify(permissions, null,5)}</Text>
    </View>
  )
}

 
const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
     alignItems:'center'
  },
  title:{
      width:250,
      fontSize:18,
      textAlign:'center',
      marginBottom:20 
  }
});