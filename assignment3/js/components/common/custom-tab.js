import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  FONT_TABBAR,
  HORIZONTAL_10,
  HORIZONTAL_25,
  VERTICAL_5,
} from '../../utils/contants';
import colors from '../../utils/globalcolors';

const CustomTab = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const bottomWidth = {
          borderBottomColor: isFocused ? colors.primary : 'transparent',
        };
        const fontColor = isFocused ? colors.tertiary : colors.secondary;

        return (
          <TouchableOpacity
            key={index}
            accessibilityState={isFocused ? {selected: true} : {}}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.option, bottomWidth]}>
            <Text style={{fontSize: FONT_TABBAR, color: fontColor}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  option: {
    marginHorizontal: HORIZONTAL_10,
    marginLeft: HORIZONTAL_25,
    paddingVertical: VERTICAL_5,
    borderBottomWidth: 2,
  },
  container: {flexDirection: 'row'},
});
