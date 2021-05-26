import React,{ component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import City from '../Screen/CityList';
import WeatherDetail from '../Screen/WeatherDetails';
const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName= "City"
            // mode="modal"
            headerMode="none"
            >
            <Stack.Screen name="City" component={City} />
            <Stack.Screen name="WeatherDetail" component={WeatherDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
}

export default MainNavigator;