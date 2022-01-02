import { Text, View, Button } from 'react-native';
import * as React from 'react';

export default class HoroscopeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {' '}
          here are few things to tell you the future 1 . if you have a birth of
          first six months you will have: A calm behavior A successful life for
          this period 2. if you have a birth of last six months you will have: A
          creative Behaviour High scope of potential High scores in sports Note
          : these are just for this Year;
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          2. if you have a birth of last six months you will have: A creative
          Behaviour High scope of potential High scores in sports Note : these
          are just for this Year;
        </Text>
      </View>
    );
  }
}
