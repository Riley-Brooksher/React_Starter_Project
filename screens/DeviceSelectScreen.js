import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button } from 'react-native'
import SensorsComponent from '../BLE/SensorsComponent'


var sensors = new SensorsComponent();

export default function DeviceSelectScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}

       <Button
          onPress={onPressScan}
          title="Scan for BLE Devices"
          color="#3BD823"
          />

    </ScrollView>
  );
}

DeviceSelectScreen.navigationOptions = {
  title: 'Devices',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

function onPressScan() {
  //sensors.scanAndConnect
}
