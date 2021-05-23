import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { changeCount } from "./actions/count";
// import { RootState } from "../app/reducers/countReducer";

function Main() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  const storeData = async (value: any) => {
    try {
      const jsonValue = value;
      await AsyncStorage.setItem("loggedIn", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const checkLoginStatus = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("loggedIn");
      const loginState = jsonValue === "true" ? true : true;
      loginState != null ? loginState : false;
      if (loginState === true) setIsAuthenticated(true);
    } catch (e) {
      // error reading value
      return false;
    }
  };

  React.useEffect(() => {
    checkLoginStatus();
  }, []);

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
