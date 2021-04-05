import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    // backgroundColor: "red",
    width: "80%",
    height: "100%",
    padding: 20,
    // backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    fontSize: 20,
    marginBottom: 30,
    // borderBottom: "1px solid black",
  },
  primaryBtn: {
    width: "70%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginBottom: 30,
  },
  secondaryBtn: {
    width: "70%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginBottom: 30,
  },
  warningBtn: {
    width: "70%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginBottom: 30,
  },
  normalBtn: {
    width: "70%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  primaryBtnText: {
    color: "white",
    fontSize: 20,
  },
  secondaryBtnText: {
    color: "white",
    fontSize: 20,
  },
  normalBtnText: {
    color: "black",
    fontSize: 20,
  },
  warningBtnText: {
    color: "white",
    fontSize: 20,
  },
  logo: {
    position: "absolute",
    top: 40,
    color: "green",
    fontSize: 40,
  },
});
type Props = {
  setIsAuthenticated: (value: boolean) => void;
};
const Login: React.FC<Props> = ({ setIsAuthenticated }) => {
  const [name, setName] = React.useState();
  const [number, setNumber] = React.useState();
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.logo}>Parchi</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(val) => setName(val)}
          defaultValue={name}
        />
        {/* <Text>Mobile</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Mobile"
          onChangeText={(val) => setNumber(val)}
          defaultValue={number}
        />
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => {
            setIsAuthenticated(true);
          }}
        >
          <Text style={styles.primaryBtnText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.normalBtn}
          onPress={() => {
            setIsAuthenticated(true);
          }}
        >
          <Text style={styles.normalBtnText}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => {
            setIsAuthenticated(true);
          }}
        >
          <Text style={styles.secondaryBtnText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
