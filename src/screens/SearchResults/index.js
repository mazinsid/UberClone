import React from 'react';
import {Dimensions, View} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberType from '../../components/UberType';

const SearchResults = props => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
      </View>
      <View style={{height: 400 }}>
        <UberType />
      </View>
    </View>
  );
};

export default SearchResults;
