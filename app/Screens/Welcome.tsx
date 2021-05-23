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
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20,
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
  hr: {
    height: 1,
    backgroundColor: "gray",
  },
  input: {
    height: 40,
    fontSize: 20,
    marginBottom: 30,
    // borderBottom: "1px solid black",
  },
  inputItem: {
    height: 40,
    border: "1px solid black",
    width: "80%",
    padding: "2px",
    //fontSize: 20,
    // borderBottom: "1px solid black",
  },
  inputQty: {
    height: 40,
    border: "1px solid black",
    width: "20%",
    padding: "2px",
    //fontSize: 20,
    // borderBottom: "1px solid black",
  },
  itemWrapper: {
    width: "100%",
    flexDirection: "row",
  },

  list: {
    width: "100%",
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18,
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
    name: "name",
    qty: "Qty",
  };
  const [items, setItems] = React.useState([inititalItem]);
  const addItems = () => {
    const newList = [...items];
    newList.push(inititalItem);
    setItems(newList);
  };
  return (
    <View style={styles.container}>
      <Text>Create a parchi</Text>
      {/* <View> */}
      {items.map((item, index) => {
        return (
          <View style={styles.itemWrapper}>
            <TextInput
              style={styles.inputItem}
              placeholder={item.name}
              //onChangeText={(val) => (val,index)}
              //defaultValue={"Add"}
            />
            <TextInput
              style={styles.inputQty}
              placeholder={item.qty}
              //onChangeText={(val) => (val,index)}
              //defaultValue={"Add"}
            />
          </View>
        );
      })}
      {/* </View> */}

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
