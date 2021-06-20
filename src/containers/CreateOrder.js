import React, {useState} from 'react';
import {Text, FlatList, View, TextInput, Pressable, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {orders} from '../data/orders.json';
// import styles from './styles/sharedStyles.js';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
const styles = StyleSheet.create({
    orderRow : {
        width: '100%',
        height: '50px',
        backgroundColor: 'skyblue',
        flexDirection:'row',
    },
    inputItem :{
        width:'60%'
    },
    inputQty :{
        width:'40%'
    }
})
function CreateOrder({navigation}) {
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
    <>
    {order.map((item, index) => {
        return (          
          <View key = {Math.random()}style={styles.orderRow}>
                <OrderRow index = {index} item = {item} saveItem={saveItem}/>
                <DeleteOrder index = {index} deleteItem={deleteItem}/>
          </View>
        );
      })}
      <TouchableOpacity onPress={() => addOrder()}>
        <Text style={styles.clickableText}>
          Add more
        </Text>
      </TouchableOpacity>
      </>)
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



const renderItem = ({item, index}) => {
  return (
    <View>
      <SpeakerList
        id={index}
        name={item.name}
        bio={item.bio}
        session={item.sessions[0].name}
      />
    </View>
  );
};


const OrderRow = ({index, item, saveItem}) => {
    const [itemName, setItemName] = React.useState(item.name)
    const [itemQty, setItemQty] = React.useState(item.qty)
    return (
        <>
            <TextInput
                style={styles.inputItem}
                value={itemName}
                onChangeText={(text) => setItemName(text)}
                placeholder={'Enter Item name'}
                onBlur = {()=>saveItem(index,itemName,'name')}
            />
            <TextInput
                style={styles.inputQty}
                value={itemQty}
                onChangeText={(text) => setItemQty(text)}
                placeholder={'Quantity'}
                onBlur = {()=>saveItem(index,itemQty,'qty')}
            /> 
            
        
    </>
    );
  };
const DeleteOrder = ({index,deleteItem}) => {
    return (
    <TouchableOpacity onPress={() => deleteItem(index)}>
        <Text style={styles.clickableText}>
          Delete
        </Text>
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
export default CreateOrder;
