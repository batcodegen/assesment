import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  FONT_10,
  FONT_12,
  FONT_16,
  HORIZONTAL_15,
  HORIZONTAL_25,
  VERTICAL_10,
  VERTICAL_15,
  VERTICAL_5,
  VERTICAL_8,
} from '../../utils/contants';
import colors from '../../utils/globalcolors';
import data from '../../mock-data/plans.json';

const BestOffers = () => {
  const renderSeparator = () => (
    <View
      style={{
        borderBottomWidth: 0.5,
        backgroundColor: colors.secondary,
        opacity: 0.3,
        marginBottom: VERTICAL_10,
        marginTop: VERTICAL_5,
      }}
    />
  );

  const renderItem = useCallback(({item}) => {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: colors.tertiary}}>{item.name}</Text>
          <View
            style={{
              borderWidth: 1,
              paddingHorizontal: HORIZONTAL_15,
              justifyContent: 'center',
              borderColor: colors.primary,
              borderRadius: 20,
            }}>
            <Text style={{fontSize: FONT_10, color: colors.primary}}>
              {'Select'}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: FONT_12,
            color: colors.tertiary_light,
            marginTop: 8,
          }}>{`Validity: ${item.validity}`}</Text>
        <Text
          style={{
            fontSize: FONT_12,
            marginTop: VERTICAL_8,
            opacity: 0.7,
            lineHeight: FONT_16,
          }}>
          {item.description}
        </Text>
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: HORIZONTAL_25,
          paddingTop: VERTICAL_15,
        }}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default BestOffers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary_light,
  },
});
