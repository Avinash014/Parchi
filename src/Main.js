import React from 'react';
import Home from './containers/Home';
import Conference from './containers/Conference';
import Story from './containers/Story';
import Sessions from './containers/Sessions';
import Speakers from './containers/Speakers';
import CreateOrder from './containers/CreateOrder';
import PastOrder from './containers/PastOrder';
import SavedOrder from './containers/SavedOrder';
import ConfirmedOrder from './containers/ConfirmedOrder';
import SelectVendor from './containers/SelectVendor';
import FinalOrder from './containers/FinalOrder';
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import configureStore from "../app/store/configureStore";

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Main = () => {
  const store = configureStore();
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create Order" component={CreateOrder} />
            <Stack.Screen name="Select Vendor" component={SelectVendor} />
            <Stack.Screen name="Confirmed Order" component={ConfirmedOrder} />
            <Stack.Screen name="Saved Order" component={SavedOrder} />
            <Stack.Screen name="Past Order" component={PastOrder} />
            <Stack.Screen name="Conference" component={Conference} />
            <Stack.Screen name="Story" component={Story} />
            <Stack.Screen name="Sessions" component={Sessions} />
            <Stack.Screen name="Speakers" component={Speakers} />
          </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
    </StoreProvider>
  );
};

export default Main;

