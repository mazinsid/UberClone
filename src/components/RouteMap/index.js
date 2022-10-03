import React from 'react';
import styles from './styles';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCFgvlYddwXaqnkhsSS5dwkAcQ0612hJgo';
const RouteMap = props => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  };
  return (
    <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
