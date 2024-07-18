import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileInfo() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.cover}
        colors={['#C913B9', '#F9373F', '#FECD00']}>
        <Image
          source={require('../../../../assets/user.png')}
          style={styles.avatar}
        />
      </LinearGradient>

      <View style={styles.follow}>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>100</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>320</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>130</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  cover: {
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
  },
  follow: {
    flexDirection: 'row',
    gap: 25,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    fontWeight: '400',
  },
  stats: {
    alignItems: 'center',
  },
});
