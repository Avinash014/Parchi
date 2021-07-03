import React, {useState} from 'react';
import {Text, FlatList, View, TextInput, Pressable, Image, Button, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {orders} from '../data/orders.json';
// import styles from './styles/sharedStyles.js';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import { IconButton, Colors,Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
    container:{
      padding:'2px',
      backgroundColor: 'skyblue',
      flex:1,
      alignItems: "center",
    },
    orderContainer:{
      width:'100%',
    },
    orderRow : {
        width: '100%',
        border:'1px solid black',
        backgroundColor: 'white',
        borderRadius:"5px",
        height: '50px',
        flexDirection:'row',
        alignItems: "center",
        marginBottom:"2px",

    },
    inputItem :{
        width:'50%',
        height:'75%',
        padding:'5px',
        borderRightWidth:'1px',
        borderRightColor:'black',
        borderStyle:'solid',
        justifyContent:'center'
    },
    inputQty :{
        width:'40%',
        height:'75%',
        padding:'5px',
        borderRightWidth:'1px',
        borderRightColor:'black',
        borderStyle:'solid',
        justifyContent:'center'
    },
    deleteIcon:{
      width:'10%'
    },
    addMoreBtn:{
      alignItems:"center"
    },
    btnPrimary:{
      width:'200px',
      padding:'5px',
      justifyContent:'center',
      alignItems:'center',
      border:'2px solid black',
      borderRadius:'5px',
      backgroundColor:'dodgerblue',
      fontWeight:'bold',
      color:'white',
    },
    stickyFooter:{
      marginTop: 'auto'
    }
})
function ConfirmedOrder({navigation}) {
    const [order, setOrder] = useState([{}]);
    const initialOrder = {};
    const addOrder = () =>{
        let newOrder = [...order];
          newOrder.push({});
          setOrder(newOrder);
          console.log(newOrder)
    }
    const deleteItem = (index) =>{
        let newOrder = [...order];
          newOrder.splice(index,1)
          setOrder(newOrder);
          //console.log(newOrder)
    }
    const saveItem = (index,item,type) => {
        let newOrder = [...order];
        if(type === 'name')newOrder[index].name = item ;
        else newOrder[index].qty = item;
          setOrder(newOrder);
          console.log(newOrder)
    }
    // React.useEffect(()=> {
    //     setOrder([initialOrder])
    // })
    return (
    <View style={styles.container}>
      <ScrollView style={styles.orderContainer}>
        {order.map((item, index) => {
            return (          
              <View key = {Math.random()}style={styles.orderRow}>
                    <OrderRow index = {index} item = {item} saveItem={saveItem}/>
                    <DeleteOrder index = {index} deleteItem={deleteItem}/>
              </View>
            );
          })}
          <TouchableOpacity style = {styles.addMoreBtn}onPress={() => addOrder()}>
            <IconButton
              icon="plus-circle"
              color={Colors.grey900}
              size={30}
              onPress={() => console.log('Pressed')}
            />
          </TouchableOpacity>
      </ScrollView>
      <View style = {styles.stickyFooter}>
        <TouchableOpacity style = {styles.btnPrimary} onPress={() => addOrder()}>
          Save &amp; Continue
        </TouchableOpacity>
      </View>
      </View>)
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

const OrderRow = ({index, item, saveItem}) => {
    const [itemName, setItemName] = React.useState(item.name)
    const [itemQty, setItemQty] = React.useState(item.qty)
    return (
        <>
            <View style={styles.inputItem}>
              <TextInput
                  value={itemName}
                  onChangeText={(text) => setItemName(text)}
                  placeholder={'Enter Item name'}
                  onBlur = {()=>saveItem(index,itemName,'name')}
              />
            </View>
            <View style={styles.inputQty}>
              <TextInput
                  value={itemQty}
                  onChangeText={(text) => setItemQty(text)}
                  placeholder={'Quantity'}
                  onBlur = {()=>saveItem(index,itemQty,'qty')}
              /> 
            </View>
        </>
    );
  };
const DeleteOrder = ({index,deleteItem}) => {
    return (
    <TouchableOpacity style = {styles.deleteIcon} onPress={() => deleteItem(index)}>
      <IconButton
        icon="delete"
        color={Colors.grey900}
        size={20}
        onPress={() => console.log('Pressed')}
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
      image={require('../images/girl.png')}
      heading={'Awesome Speakers Lineup!!'}
      style={styles.sectionTitleGreen}
    />
  );
};

const FooterComponent = () => {
  return <Footer />;
};
export default ConfirmedOrder;
