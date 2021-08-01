/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { StyleSheet } from "react-native";
// import styles from './styles/sharedStyles.js';
import "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

import { TouchableOpacity } from "react-native-gesture-handler";
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
function PastOrder({ navigation }) {
  const dispatch = useDispatch();
  const { pastOrderList } = useSelector((state) => ({
    pastOrderList: state.count.pastOrderList,
  }));
  const renderItem = ({ item }) => (
    <Text>
      {item.name} : {item.qty}
    </Text>
  );
  console.info(pastOrderList);
  return pastOrderList.map((pastOrder) => {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selected shop</Text>
        </View>
        <View style={styles.venderSelected}>{pastOrder.vendor}</View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selected order</Text>
        </View>
        <View style={styles.orderSelected}>
          <ScrollView>
            <FlatList
              keyboardDismissMode={"on-drag"}
              keyboardShouldPersistTaps={"always"}
              data={pastOrder.order}
              keyExtractor={(item) => item.name}
              renderItem={renderItem}
              // ItemSeparatorComponent={SeparatorComponent}
              pagingEnabled={false}
              // ListHeaderComponent={HeaderComponent}
              // ListFooterComponent={FooterComponent}
            />
          </ScrollView>
        </View>
        {/* <View style={styles.stickyFooter}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => PlaceOrderHandler()}
          >
            Repeat Order
          </TouchableOpacity>
        </View> */}
      </View>
    );
  });
}

const SeparatorComponent = () => {
  return <View style={styles.seperatorStyle} />;
};

export default PastOrder;
