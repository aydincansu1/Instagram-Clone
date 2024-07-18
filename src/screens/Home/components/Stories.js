import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import stories from '../../../data/stories';

export default function Stories() {
  return (
    <View style={styles.stories}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          <View key={story.id} style={styles.story}>
            <LinearGradient
              style={styles.cover}
              colors={['#C913B9', '#F9373F', '#FECD00']}>
              <Image source={{uri: story.user.avatar}} style={styles.avatar} />
            </LinearGradient>

            <Text numberOfLines={1}>{story.user.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  cover: {
    padding: 2,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  story: {
    width: 67,
    marginHorizontal: 8,
  },
  stories: {
    paddingVertical: 10,
  },
  name: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});
