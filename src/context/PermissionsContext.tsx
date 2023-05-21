import React, { createContext, useState } from "react";
import { PermissionStatus } from "react-native-permissions";

 
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
    
    const askLocationPermission =()=>{

    }
    const  checkLocationPermission =()=>{ 

    }
    const [permissions, setPermissions] = useState(permissionsInitState);
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