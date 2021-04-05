import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  TextInput,
  Platform,
} from "react-native";
const isAndroid = Platform.OS == "android";
const viewPadding = 10;
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
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
  inputItem: {
    height: 40,
    //fontSize: 20,
    // borderBottom: "1px solid black",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20,
  },
  list: {
    width: "100%",
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18,
  },
  hr: {
    height: 1,
    backgroundColor: "gray",
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%",
  },
});

type Props = {
  setIsAuthenticated: (value: boolean) => void;
};
const Welcome: React.FC<Props> = ({ setIsAuthenticated }) => {
  const inititalItem = {
    name: "Enter the item name",
    qty: "How much do you want",
  };
  const [items, setItems] = React.useState([inititalItem]);
  const addItems = () => {
    const newList = [...items];
    newList.push(inititalItem);
    setItems(newList);
  };
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <View>
        {items.map((item, index) => {
          return (
            <>
              <TextInput
                style={styles.inputItem}
                placeholder={item.name}
                //onChangeText={(val) => (val,index)}
                //defaultValue={"Add"}
              />
              <TextInput
                style={styles.inputItem}
                placeholder={item.qty}
                //onChangeText={(val) => (val,index)}
                //defaultValue={"Add"}
              />
            </>
          );
        })}
      </View>

      <Button
        onPress={() => {
          addItems();
        }}
        title="Add items"
      />
      <Button
        onPress={() => {
          setIsAuthenticated(false);
        }}
        title="Logout"
      />
    </View>
  );
};

export default Welcome;
