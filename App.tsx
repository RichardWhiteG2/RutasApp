import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Navigator from './src/navigator/Navigator';
import { PermissionsProvider } from './src/context/PermissionsContext';

const AppState= ({children}: any)=>{
  return(
    <PermissionsProvider>
      {children} 
    </PermissionsProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator/>
      </AppState> 
    </NavigationContainer>
    
  ) 
}

export default App;
