import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';

import {
  Home,
  HomeDark,
  SearchDark,
  Search,
  ReelsDark,
  Reels,
  ShopDark,
  Shop,
} from './Icons';
import {Image, StyleSheet} from 'react-native';
import Profile from './screens/Profile/Profile';
export default function Screen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeDark size={24} /> : <Home size={24} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SearchDark size={24} /> : <Search size={24} />,
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ReelsDark size={24} /> : <Reels size={24} />,
        }}
        name="Reel"
        component={ReelScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ShopDark size={24} /> : <Shop size={24} />,
        }}
        name="Shop"
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.avatar,
                {borderColor: focused ? '#000' : 'transparent'},
              ]}
              source={require('../assets/user.png')}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 25,
    borderWidth: 2,
  },
});
