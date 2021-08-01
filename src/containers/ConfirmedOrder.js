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
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { orders } from "../data/orders.json";
// import styles from './styles/sharedStyles.js';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IconButton, Colors, Avatar } from "react-native-paper";
import { changeCount, addOrderAction, addToOrderList } from "../actions/count";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";

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
    // minHeight: "50%",
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
  },
  titleContainer: {
    padding: "5px",
  },
  title: {
    fontSize: "20px",
  },
  venderSelected: {
    width: "100%",
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5px",
    backgroundColor: "aliceblue",
    // minHeight: "50%",
    // flexDirection: "row",
    // alignItems: "center",
    marginBottom: "2px",
  },
});
function ConfirmedOrder({ navigation }) {
  const dispatch = useDispatch();
  const { count, finalOrder, vendor, pastOrderList } = useSelector((state) => ({
    count: state.count,
    finalOrder: state.count.order,
    vendor: state.count.vendor,
    pastOrderList: state.count.pastOrderList,
  }));

  const PlaceOrderHandler = async () => {
    const orderObj = {
      vendor: vendor,
      order: finalOrder,
    };
    await dispatch(addToOrderList(orderObj));
    setTimeout(() => {
      console.info(pastOrderList);
    }, 1000);
    var axios = require("axios");
    var data = JSON.stringify({
      customerId: 1,
      vendorId: 2,
      items: finalOrder,
    });

    var config = {
      method: "post",
      url: "https://kirana-stores.herokuapp.com/order/place",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    // axios.defaults.withCredentials = false;
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const testAction = async (val) => {
    // dispatch(changeCount(val));
    await dispatch(addVendorAction(selectedValue));
    // console.info(val);
    // console.info(finalOrder);
  };
  const [order, setOrder] = useState([{}]);

  React.useEffect(() => {
    setOrder(finalOrder);
  }, []);
  const renderItem = ({ item }) => (
    <Text>
      {item.name} : {item.qty}
    </Text>
  );
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Selected shop</Text>
      </View>
      <View style={styles.venderSelected}>{vendor}</View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Selected order</Text>
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
          onPress={() => PlaceOrderHandler()}
        >
          Place Order
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ConfirmedOrder;
