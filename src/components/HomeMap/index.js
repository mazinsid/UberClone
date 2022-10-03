import React from 'react';
import {View, FlatList, Image} from 'react-native';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';
const HomeMap = props => {
  const getImage = type => {
    if (type === 'UberX') {
      // @ts-ignore
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      // @ts-ignore
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
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
      {cars.map((car )=> (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
               height: 70,
                resizeMode:'contain',
             transform: [{ 
              rotate: `${car.heading}deg`,
             }],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
