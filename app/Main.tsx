import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import CreateBill from "./Screens/CreateBill";

function Main() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return isAuthenticated ? (
    <Welcome setIsAuthenticated={setIsAuthenticated} />
  ) : (
    <Login setIsAuthenticated={setIsAuthenticated} />
  );
  // <View style={styles.container}>
  //   <Text>Welcome to Kirana store updated</Text>

  //   <StatusBar style="auto" />
  // </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Main;
