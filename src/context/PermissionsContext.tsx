import React, { createContext, useState } from "react";
import { Platform } from "react-native";
import { PERMISSIONS, PermissionStatus, request } from "react-native-permissions";

 
 export interface PermissionsState {
    locationStatus: PermissionStatus; 
 }

 export  const permissionsInitState: PermissionsState ={
    locationStatus:'unavailable',
 }

type PermissionsContextProps={
    permissions: PermissionsState;
    askLocationPermission: ()=> void; 
    checkLocationPermission:() => void; 
}
 export const PermissionsContext = createContext({} as PermissionsContextProps); //TODO: que exporta
 
 export const PermissionsProvider = ({children}:any)=>{
    const [permissions, setPermissions] = useState(permissionsInitState);
    
    const askLocationPermission =async ()=>{
        let permissionStatus: PermissionStatus; 
      
        if(Platform.OS =='ios'){
        // permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );
        permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );
        }else{
        // permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION  );
        permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION  );
        }
        console.log({permissionStatus})

        setPermissions({
            ...permissions,
            locationStatus:permissionStatus
        }); 
    }
    const  checkLocationPermission =()=>{ 

    }
     return(
        <PermissionsContext.Provider
            value={{
                permissions,
                askLocationPermission,
                checkLocationPermission,
            }}
        >
            {children }
        </PermissionsContext.Provider>
     )
 }