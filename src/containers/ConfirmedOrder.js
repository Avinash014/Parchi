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
import { changeCount, addOrderAction } from "../actions/count";
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
  const { count, finalOrder, vendor } = useSelector((state) => ({
    count: state.count,
    finalOrder: state.count.order,
    vendor: state.count.vendor,
  }));

  const PlaceOrderHandler = () => {
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
      //   "Content-Type": "application/json",
      //   // "Access-Control-Allow-Origin": "*",
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
  const testAction = async (val) => {
    // dispatch(changeCount(val));
    await dispatch(addVendorAction(selectedValue));
    // console.info(val);
    // console.info(finalOrder);
  };
  const [order, setOrder] = useState([{}]);
  const initialOrder = {};
  const addOrder = () => {
    let newOrder = [...order];
    newOrder.push({});
    setOrder(newOrder);
    console.log(newOrder);
  };
  const deleteItem = (index) => {
    let newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
    //console.log(newOrder)
  };
  const saveItem = (index, item, type) => {
    let newOrder = [...order];
    if (type === "name") newOrder[index].name = item;
    else newOrder[index].qty = item;
    setOrder(newOrder);
    console.log(newOrder);
  };
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
  //   return (
  //     <View>
  //       <FlatList
  //         keyboardDismissMode={'on-drag'}
  //         keyboardShouldPersistTaps={'always'}
  //         data={filteredOrder}
  //         keyExtractor={(item) => item.id}
  //         renderItem={renderItem}
  //         ItemSeparatorComponent={SeparatorComponent}
  //         pagingEnabled={false}
  //         ListHeaderComponent={HeaderComponent}
  //         ListFooterComponent={FooterComponent}
  //       />
  //     </View>
  //   );
}

const OrderRow = ({ index, item, saveItem }) => {
  const [itemName, setItemName] = React.useState(item.name);
  const [itemQty, setItemQty] = React.useState(item.qty);
  return (
    <>
      <View style={styles.inputItem}>
        <TextInput
          value={itemName}
          onChangeText={(text) => setItemName(text)}
          placeholder={"Enter Item name"}
          onBlur={() => saveItem(index, itemName, "name")}
        />
      </View>
      <View style={styles.inputQty}>
        <TextInput
          value={itemQty}
          onChangeText={(text) => setItemQty(text)}
          placeholder={"Quantity"}
          onBlur={() => saveItem(index, itemQty, "qty")}
        />
      </View>
    </>
  );
};
const DeleteOrder = ({ index, deleteItem }) => {
  return (
    <TouchableOpacity
      style={styles.deleteIcon}
      onPress={() => deleteItem(index)}
    >
      <IconButton
        icon="delete"
        color={Colors.grey900}
        size={20}
        onPress={() => console.log("Pressed")}
      />
      {/* <Text style={styles.clickableText}>
          Delete
        </Text> */}
    </TouchableOpacity>
  );
};

const SeparatorComponent = () => {
  return <View style={styles.seperatorStyle} />;
};

const HeaderComponent = () => {
  return (
    <Header
      image={require("../images/girl.png")}
      heading={"Awesome Speakers Lineup!!"}
      style={styles.sectionTitleGreen}
    />
  );
};

const FooterComponent = () => {
  return <Footer />;
};
export default ConfirmedOrder;
