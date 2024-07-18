import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Chat, Like, Logo, Plus} from '../../../Icons';
export default function Header() {
  return (
    <View style={styles.header}>
      <Logo />
      <View style={styles.container}>
        <TouchableOpacity>
          <Plus size={24} />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Like size={24} />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Chat size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 44,
    alignItems: 'center',
    paddingBottom: 4,
  },
  container: {
    flexDirection: 'row',
    gap: 30,
  },
  dot: {
    backgroundColor: '#FE3650',
    borderRadius: 50,
    width: 8,
    height: 8,
  },
  dotContainer: {
    position: 'absolute',
    zIndex: 99,
    right: -2,
  },
});
