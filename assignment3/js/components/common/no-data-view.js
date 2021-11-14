import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONT_16} from '../../utils/contants';

const NoDataView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.data}>No data!</Text>
    </View>
  );
};

export default NoDataView;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  data: {fontSize: FONT_16, fontWeight: 'bold'},
});
