import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ProfileStory() {
  return (
    <ScrollView
      horizontal
      style={styles.stories}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            borderRadius: 40,
            padding: 5,
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/27089710/pexels-photo-27089710/free-photo-of-gida-yemek-yiyecek-deniz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            style={styles.storyImage}
          />
        </View>

        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            borderRadius: 40,
            padding: 5,
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/15967846/pexels-photo-15967846/free-photo-of-doga-kadin-alan-tarla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            style={styles.storyImage}
          />
        </View>

        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            borderRadius: 40,
            padding: 5,
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/23287387/pexels-photo-23287387/free-photo-of-deniz-kadin-yaz-sahil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            style={styles.storyImage}
          />
        </View>

        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            borderRadius: 40,
            padding: 5,
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/12569195/pexels-photo-12569195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            style={styles.storyImage}
          />
        </View>

        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            borderRadius: 40,
            padding: 5,
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.storyLabel}>New</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  storyLabel: {
    color: '#000000',
    marginTop: 3,
  },
  plusSign: {
    fontSize: 40,
    color: '#dcdcdc',
  },
});
