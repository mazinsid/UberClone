import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const CovidMessage = props => {
  return (
    <View style={styles.contaner}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Upgrading this package often requires the font files linked to your
        project
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;
