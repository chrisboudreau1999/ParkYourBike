import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        
        initialRegion={{
          latitude: 44.651070,
          longitude: -63.582687,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
     
      
      
      >
        <Marker
          coordinate={{
            latitude: 44.6514389,
            longitude: -63.582475,
          }
          } 
          />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});