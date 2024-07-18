import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Dropdown, Menu, Plus} from '../../../Icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.leftheader}>
        <Text style={styles.text}>username</Text>
        <Dropdown />
      </View>
      <View style={styles.rightheader}>
        <Plus size={24} />
        <Menu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  leftheader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightheader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
