import React, { useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../screens/LoadingScreen';
import { Fab } from './Fab';

interface Props{
    markers?: typeof Marker[];
}

export const Map = ({markers}: Props) => {
    const {hasLocation, initialPosition, getCurrentLocation} = useLocation();
    const mapViewRef = useRef<MapView>();

    const centerPosition= async ()=>{

        const {latitude, longitude } = await getCurrentLocation(); 
        mapViewRef.current?.animateCamera({
             center:{latitude, longitude}
        }); 
    }
    if( !hasLocation){
        return <LoadingScreen/>
    }
  return (
    <>
        <MapView
            ref={ (el)=> mapViewRef.current = el!}
      //  provider={PROVIDER_GOOGLE} Para que en ambos se vea el de Google maps
        showsUserLocation 
        style={{flex:1}}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
            {/* <Marker
                image={ require("../assets/custom-marker.png")}
                coordinate= {{
                    latitude: 37.33023256,
                    longitude: -122.02344987,
                }}
                title='Esto es un titulo'
                description="Description"
            /> */}
        </MapView>
        <Fab 
            iconName={'compass-outline'} 
            onPress={centerPosition}
            style={{
                position:'absolute',
                bottom:10,
                right:10
            }}          
        />
    </>
  )
}
