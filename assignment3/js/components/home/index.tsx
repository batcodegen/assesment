import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ScreenNames from '../../navigation/ScreenNames';
import {
  BROWSE_TEXT,
  FONT_SUBTEXT,
  HORIZONTAL_25,
  HORIZONTAL_5,
  TEXTINPUT,
  VERTICAL_15,
  VERTICAL_5,
  WIDTH_18,
  WIDTH_20,
} from '../../utils/contants';
import colors from '../../utils/globalcolors';
import CustomTab from '../common/custom-tab';
import BestOffers from '../plan-browser/best-offers';
import PopularOffers from '../plan-browser/popular-offers';
import SpecialRecharge from '../plan-browser/special-recharge';
import TopupOffers from '../plan-browser/topup-offers';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBar={props => (
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={200}
          decelerationRate={'fast'}
          pagingEnabled
          contentInset={{top: 0, left: 0, right: 0}}
          contentOffset={{x: props?.state?.index * 30}}
          snapToAlignment={'start'}
          style={styles.scroll}>
          <CustomTab {...props} />
        </ScrollView>
      </View>
    )}>
    <Tab.Screen
      name={ScreenNames.bestoffers}
      component={BestOffers}
      options={{
        tabBarLabel: 'Best Offers for You',
      }}
    />
    <Tab.Screen
      name={ScreenNames.popularoffers}
      component={PopularOffers}
      options={{
        tabBarLabel: 'Popular',
      }}
    />
    <Tab.Screen
      name={ScreenNames.specialrecharge}
      component={SpecialRecharge}
      options={{
        tabBarLabel: 'Special Recharge',
      }}
    />
    <Tab.Screen
      name={ScreenNames.topupoffers}
      component={TopupOffers}
      options={{
        tabBarLabel: 'Topup',
      }}
    />
  </Tab.Navigator>
);

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.browseContainer}>
        <View>
          <Text style={styles.browseText}>Browse Plans</Text>
          <Text style={styles.subText}>for Airtel Kolkata</Text>
        </View>
        <Image
          source={require('../../assets/closeicon/close-round.png')}
          style={styles.closeIcon}
        />
      </View>
      <View style={styles.searchcontainer}>
        <TextInput
          placeholder={'Search Plan Amount, Talktime'}
          style={styles.textinput}
        />
        <Image
          source={require('../../assets/search/search.png')}
          style={styles.searchicon}
        />
      </View>
      <TabNavigator />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary_light,
    paddingTop: VERTICAL_15,
  },
  browseText: {
    color: colors.primary,
    fontSize: BROWSE_TEXT,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: FONT_SUBTEXT,
  },
  searchcontainer: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginHorizontal: HORIZONTAL_25,
    justifyContent: 'space-between',
    paddingRight: HORIZONTAL_5,
    borderBottomColor: colors.primary_light,
    marginVertical: VERTICAL_15,
  },
  closeIcon: {
    width: WIDTH_18,
    height: WIDTH_18,
    marginTop: VERTICAL_5,
  },
  scroll: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.primary_light,
  },
  browseContainer: {
    flexDirection: 'row',
    marginHorizontal: HORIZONTAL_25,
    justifyContent: 'space-between',
  },
  searchicon: {
    width: WIDTH_20,
    height: WIDTH_20,
    alignSelf: 'center',
  },
  textinput: {
    padding: 0,
    fontSize: TEXTINPUT,
  },
});
