import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import JokeScreen from './Screens/JokeScreen'
import HoroscopeScreen from './Screens/HoroscopeScreen'
import TopNews  from './Screens/TopNews'
import Weather  from './Screens/Weather'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}



var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  JokeScreen : JokeScreen,
  HoroscopeScreen : HoroscopeScreen,
  TopNews : TopNews,
  Weather : Weather
})

const AppContainer = createAppContainer(AppNavigator)




