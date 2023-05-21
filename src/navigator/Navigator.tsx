import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { MapScreen } from '../screens/MapScreen';

const Stack = createStackNavigator();

 const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
             headerShown:false,
             cardStyle:{
                backgroundColor:'white'
             }
            
        }}
    >
      <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}
export default Navigator;