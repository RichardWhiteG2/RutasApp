import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { MapScreen } from '../screens/MapScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

 const Navigator = () => {
    const {permissions} = useContext(PermissionsContext);
    if(permissions.locationStatus==='unavailable'){
        return <LoadingScreen/>
    }
  return (
    <Stack.Navigator
        screenOptions={{
             headerShown:false,
             cardStyle:{
                backgroundColor:'white'
             }
        }}
    >
      {
        (permissions.locationStatus==='granted')
        ?<Stack.Screen name="MapScreen" component={MapScreen} />
        :<Stack.Screen name="PermissionsScreen" component={PermissionsScreen} /> 
      }
    </Stack.Navigator>
  );
}
export default Navigator;