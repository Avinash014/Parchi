import { StatusBar } from "expo-status-bar";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import configureStore from "./app/store/configureStore";
import { StyleSheet, Text, View } from "react-native";
import Main from "./app/Main";

import Welcome from "./app/Screens/Welcome";
// const store = configureStore();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

export default function App() {
  const store = configureStore();

  const [userName, setUserName] = React.useState("");
  React.useEffect(() => {
    setUserName("Avinash");
  });
  console.log("app a");
  var x = 1;
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
