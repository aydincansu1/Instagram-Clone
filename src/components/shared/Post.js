import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Comment, Dots, Like, Record, Transmit} from '../../Icons';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from 'dayjs';

export default function Post({post}) {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.users}>
          <Image style={styles.profile} source={{uri: post?.user?.avatar}} />
          <Text style={post}>{post?.user?.name}</Text>
        </View>
        <View>
          <Dots />
        </View>
      </View>
      <FitImage src={post?.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity>
              <Like size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Comment />
            </TouchableOpacity>
            <TouchableOpacity>
              <Transmit />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.rightActions}>
            <Record />
          </TouchableOpacity>
        </View>
        <View style={styles.root}>
          <Text>{post?.likes} Like</Text>

          <ReadMore
            seeLessStyle={{color: '#999'}}
            seeLessText="Daha Az"
            seeMoreText="Daha Fazla"
            numberOfLines={2}
            seeMoreStyle={{color: '#999'}}>
            <Text style={styles.user}>{post?.user.name}</Text>{' '}
            {post?.description}
          </ReadMore>
          {post?.comments > 0 && (
            <TouchableOpacity style={styles.comments}>
              {<Text>Wiew all {post?.comments}</Text>}
            </TouchableOpacity>
          )}
          <View>
            <Text style={styles.date}>{post?.date}</Text>
            <Text style={styles.translation}>See Translation</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  post: {
    marginTop: 20,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  users: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  content: {},
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
  },
  leftActions: {
    flexDirection: 'row',
    gap: 5,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  rightActions: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  root: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 2,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 14,
  },
  comments: {
    opacity: 0.5,
  },
  date: {
    fontSize: 13,
    opacity: 0.5,
  },
  translation: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 5,
  },
});
