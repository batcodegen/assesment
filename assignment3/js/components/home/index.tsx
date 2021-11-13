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
import BestOffers from '../plan-browser/best-offers';
import PopularOffers from '../plan-browser/popular-offers';
import SpecialRecharge from '../plan-browser/special-recharge';
import TopupOffers from '../plan-browser/topup-offers';
import colors from '../../utils/globalcolors';
import {
  BROWSE_TEXT,
  FONT_SUBTEXT,
  FONT_TABBAR,
  HEIGHT_18,
  HEIGHT_20,
  HORIZONTAL_20,
  HORIZONTAL_25,
  HORIZONTAL_5,
  TEXTINPUT,
  VERTICAL_15,
  VERTICAL_5,
  WIDTH_18,
  WIDTH_20,
} from '../../utils/contants';
import CustomTab from '../common/custom-tab';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBar={props => (
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={200}
          snapToAlignment={'center'}
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: colors.primary_light,
          }}>
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
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: HORIZONTAL_25,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.browseText}>Browse Plans</Text>
          <Text style={styles.subText}>for Airtel Kolkata</Text>
        </View>
        <Image
          source={require('../../assets/closeicon/close-round.png')}
          style={{
            width: WIDTH_18,
            height: WIDTH_18,
            marginTop: VERTICAL_5,
          }}
        />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          flexDirection: 'row',
          marginHorizontal: HORIZONTAL_25,
          justifyContent: 'space-between',
          paddingRight: HORIZONTAL_5,
          borderBottomColor: colors.primary_light,
          marginVertical: VERTICAL_15,
        }}>
        <TextInput
          placeholder={'Search Plan Amount, Talktime'}
          style={{
            padding: 0,
            fontSize: TEXTINPUT,
          }}
        />
        <Image
          source={require('../../assets/search/search.png')}
          style={{
            width: WIDTH_20,
            height: WIDTH_20,
            alignSelf: 'center',
          }}
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
});
