import React from 'react'
import MapView, { Marker } from 'react-native-maps'

export const Map = () => {
  return (
    <>
        <MapView
      //  provider={PROVIDER_GOOGLE} Para que en ambos se vea el de Google maps
        style={{flex:1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
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
