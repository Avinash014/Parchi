import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./app/Main";
import Welcome from "./app/Screens/Welcome";

export default function App() {
  const [userName, setUserName] = React.useState("");
  React.useEffect(() => {
    setUserName("Avinash");
  });
  console.log("app a");
  var x = 1;
  return <Main />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
