import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  FONT_10,
  FONT_12,
  FONT_16,
  HORIZONTAL_15,
  HORIZONTAL_25,
  VERTICAL_10,
  VERTICAL_12,
  VERTICAL_15,
  VERTICAL_5,
  VERTICAL_8,
} from '../../utils/contants';
import colors from '../../utils/globalcolors';
import data from '../../mock-data/plans.json';
import NoDataView from '../common/no-data-view';

const BestOffers = () => {
  const renderSeparator = () => <View style={styles.separator} />;
  const renderEmptyComponent = () => <NoDataView />;

  const renderItem = useCallback(({item}) => {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: colors.tertiary}}>{item.name}</Text>
          <View style={styles.selectContainer}>
            <Text style={{fontSize: FONT_12, color: colors.primary}}>
              {'Select'}
            </Text>
          </View>
        </View>
        <Text style={styles.validityText}>{`Validity: ${item.validity}`}</Text>
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
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={styles.flatlist}
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
