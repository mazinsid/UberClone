import React, {useState, useEffect} from 'react';
import {TextInput, View, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const DestinationSearch = props => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    console.warn('useEffect in Called');
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 5,
              left: 10,
              right: 10,
            },
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAip7_ZE5V9chGMHjQ0Ad_31X1FVsUPIHg',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 60,
              left: 10,
              right: 10,
            },
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAip7_ZE5V9chGMHjQ0Ad_31X1FVsUPIHg',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
