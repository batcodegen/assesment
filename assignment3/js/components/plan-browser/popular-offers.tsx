import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../utils/globalcolors';
import data from '../../mock-data/plans.json';
import {
  FONT_12,
  FONT_16,
  HORIZONTAL_15,
  HORIZONTAL_20,
  HORIZONTAL_25,
  VERTICAL_10,
  VERTICAL_12,
  VERTICAL_15,
  VERTICAL_5,
  VERTICAL_8,
} from '../../utils/contants';
import NoDataView from '../common/no-data-view';

const PopularOffers = () => {
  const renderSeparator = () => <View style={styles.separator} />;
  const renderEmptyComponent = () => <NoDataView />;

  const renderItem = useCallback(({item}) => {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: colors.tertiary}}>{item.name}</Text>
          <TouchableOpacity style={styles.selectContainer} activeOpacity={0.5}>
            <Text style={{fontSize: FONT_12, color: colors.primary}}>
              {'Select'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={styles.validityText}>{`Validity: ${item.validity}`}</Text>
          <Text style={styles.dailydata}>{`Data: ${item.dailydata}`}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={styles.flatlist}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default PopularOffers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary_light,
  },
  flatlist: {
    paddingHorizontal: HORIZONTAL_25,
    paddingTop: VERTICAL_15,
  },
  separator: {
    borderBottomWidth: 0.5,
    backgroundColor: colors.secondary,
    opacity: 0.3,
    marginBottom: VERTICAL_12,
    marginTop: VERTICAL_8,
  },
  selectContainer: {
    borderWidth: 1,
    paddingHorizontal: HORIZONTAL_15,
    justifyContent: 'center',
    borderColor: colors.primary,
    borderRadius: 20,
    paddingVertical: VERTICAL_5,
  },
  dailydata: {
    fontSize: FONT_12,
    color: colors.tertiary_light,
    marginTop: VERTICAL_8,
    marginHorizontal: HORIZONTAL_20,
  },
  validityText: {
    fontSize: FONT_12,
    color: colors.tertiary_light,
    marginTop: VERTICAL_8,
  },
  description: {
    fontSize: FONT_12,
    marginTop: VERTICAL_8,
    opacity: 0.5,
    lineHeight: FONT_16,
  },
});
