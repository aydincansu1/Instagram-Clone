import {Dimensions, Image} from 'react-native';
import React from 'react';

export default function FitImage({src}) {
  const width = Dimensions.get('window').width;
  const ratio = 1080 / width;
  const height = 707 / ratio;
  return <Image style={{width, height, marginTop: 10}} source={{uri: src}} />;
}
