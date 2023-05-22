import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';


export const Map = () => {
    
    useEffect(() => {
      Geolocation.getCurrentPosition(
        info => console.log(info),
        (err)=> console.log({err}),
        {
             enableHighAccuracy:true
        }

        );
    
  }, [])
  
  return (
    <>
        <MapView
      //  provider={PROVIDER_GOOGLE} Para que en ambos se vea el de Google maps
        showsUserLocation 
        style={{flex:1}}
        initialRegion={{
          latitude: 37.33023256,
          longitude: -122.02344987,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
            {/* <Marker
                image={ require("../assets/custom-marker.png")}
                coordinate= {{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                title='Esto es un titulo'
                description="Description"
            /> */}
        </MapView>
    </>
  )
}
