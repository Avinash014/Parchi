import React from 'react';
import Home from './containers/Home';
import Conference from './containers/Conference';
import Story from './containers/Story';
import Sessions from './containers/Sessions';
import Speakers from './containers/Speakers';
import CreateOrder from './containers/CreateOrder';
import FinalOrder from './containers/FinalOrder';


import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create Order" component={CreateOrder} />
        <Stack.Screen name="Final Order" component={FinalOrder} />
        <Stack.Screen name="Conference" component={Conference} />
        <Stack.Screen name="Story" component={Story} />
        <Stack.Screen name="Sessions" component={Sessions} />
        <Stack.Screen name="Speakers" component={Speakers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// import React, {useState} from 'react';
// import { Text, SafeAreaView, StatusBar, FlatList, View, TouchableOpacity } from 'react-native';
// import TodoInput from "./TodoInput";
// import TodoItem from "./TodoItem";

// const App = () => {
//     const [todoItems, setTodoItems] = useState([{text: "Buy groceries", completed: true}, {text: "Make blogpost", completed: false}]);

//     // Add a new item to the state
//     function addTodoItem(_text) {
//         setTodoItems([...todoItems, {text:_text, completed: false}]);
//     }

//     // Delete an item from state by index
//     function deleteTodoItem(_index){
//         let tempArr = [...todoItems];
//         tempArr.splice(_index, 1);
//         setTodoItems(tempArr)
//     }

//     // Function to set completed to true by index.
//     function completeTodoItem(_index){
//         let tempArr = [...todoItems];
//         tempArr[_index].completed = true;
//         setTodoItems(tempArr)
//     }

//     // Render
//     return (
//         <>
//             <StatusBar barStyle={"light-content"} backgroundColor={"#212121"}/>
//             <SafeAreaView style={{padding: 16, justifyContent: 'space-between', flex: 1}}>
//                 <Text style={{fontSize: 36, fontWeight: 'bold'}}>Todo</Text>
//                 <FlatList
//                     data={todoItems}
//                     keyExtractor={(item, index) => index.toString()}
//                     renderItem={({item, index}) => {
//                         return (
//                             <TodoItem
//                                 item={item}
//                                 deleteFunction={() => deleteTodoItem(index)}
//                                 completeFunction={() => completeTodoItem(index)}
//                             />
//                         )
//                     }}
//                 />
//                 <TodoInput onPress={addTodoItem} />
//             </SafeAreaView>
//         </>
//     );
// };

// export default App;


