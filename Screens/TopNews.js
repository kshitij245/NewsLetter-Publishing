import { Text, View, Button } from 'react-native';
import * as React from 'react';

export default class TopScreen extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          {' '}
          Here are the News of today{' '}
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          {' '}
          Elon Musk plan to send a mission to mars in 2030{' '}
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          {' '}
          India Plans to Build the Dholera smart city in the near future{' '}
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          {' '}
          Zomato is about to launch its IPO on 22 July this year{' '}
        </Text>
      </View>
    );
  }
}
