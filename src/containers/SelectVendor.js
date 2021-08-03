import React, { useState } from "react";
import {
  Text,
  FlatList,
  View,
  TextInput,
  Pressable,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { changeCount, addOrderAction, addVendorAction } from "../actions/count";
import { useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  container: {
    padding: "2px",
    backgroundColor: "skyblue",
    flex: 1,
    alignItems: "center",
  },
  orderContainer: {
    width: "100%",
  },
  orderRow: {
    width: "100%",
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "5px",
    height: "50px",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "2px",
  },
  orderSelected: {
    width: "100%",
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5px",
    backgroundColor: "aliceblue",
    minHeight: "50%",
    // flexDirection: "row",
    // alignItems: "center",
    marginBottom: "2px",
  },
  inputItem: {
    width: "50%",
    height: "75%",
    padding: "5px",
    borderRightWidth: "1px",
    borderRightColor: "black",
    borderStyle: "solid",
    justifyContent: "center",
  },
  inputQty: {
    width: "40%",
    height: "75%",
    padding: "5px",
    borderRightWidth: "1px",
    borderRightColor: "black",
    borderStyle: "solid",
    justifyContent: "center",
  },
  deleteIcon: {
    width: "10%",
  },
  addMoreBtn: {
    alignItems: "center",
  },
  btnPrimary: {
    width: "200px",
    padding: "5px",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black",
    borderRadius: "5px",
    backgroundColor: "dodgerblue",
    fontWeight: "bold",
    color: "white",
  },
  stickyFooter: {
    marginTop: "auto",
    flexDirection: "row",
  },
  titleContainer: {
    padding: "5px",
  },
  title: {
    fontSize: "20px",
  },
});
// const axios = require('axios').default;
const CreateOrderHandler = () => {
  var axios = require("axios");
  var data = JSON.stringify({
    customerId: 1,
    vendorId: 2,
    items: [
      {
        item: "Oil tin",
        quantity: "12 L",
      },
    ],
  });

  var config = {
    method: "post",
    url: "https://kirana-stores.herokuapp.com/order/place",
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    headers: { "Access-Control-Allow-Origin": "*" },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
function SelectVendor({ navigation }) {
  const dispatch = useDispatch();
  const { count, finalOrder } = useSelector((state) => ({
    count: state.count,
    finalOrder: state.count.order,
  }));
  const testAction = async (val) => {
    // dispatch(changeCount(val));
    await dispatch(addVendorAction(selectedValue));
    // console.info(val);
    // console.info(finalOrder);
  };
  const [order, setOrder] = useState([{}]);
  const [selectedValue, setSelectedValue] = useState("shop 1");
  React.useEffect(() => {
    setOrder(finalOrder);
    console.info(finalOrder);
  }, []);
  const renderItem = ({ item }) => (
    // <View style={styles.orderRow}>
    <Text>
      {item.name} : {item.qty}
    </Text>
    // </View>
  );
  const nextScreenHandler = () => {
    testAction();
    navigation.navigate("Confirmed Order", { name: "Confirmed Order" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.orderContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.orderRow}
          // style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="shop 1" value="shop 1" />
          <Picker.Item label="shop 2" value="shop 2" />
          <Picker.Item label="shop 3" value="shop 3" />
        </Picker>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your order</Text>
      </View>
      <View style={styles.orderSelected}>
        <ScrollView>
          <FlatList
            keyboardDismissMode={"on-drag"}
            keyboardShouldPersistTaps={"always"}
            data={order}
            keyExtractor={(item) => item.name}
            renderItem={renderItem}
            // ItemSeparatorComponent={SeparatorComponent}
            pagingEnabled={false}
            // ListHeaderComponent={HeaderComponent}
            // ListFooterComponent={FooterComponent}
          />
        </ScrollView>
      </View>
      <View style={styles.stickyFooter}>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={
            () => CreateOrderHandler()
            // navigation.navigate('Confirmed Order', {name: 'Confirmed Order'})
          }
        >
          Save
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => nextScreenHandler()}
          //
        >
          Proceed To Checkout
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SelectVendor;
