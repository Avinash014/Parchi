/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   View,
   Text,
   StatusBar,
   Image,
 } from 'react-native';
 import {StyleSheet} from 'react-native';
 // import styles from './styles/sharedStyles.js';
 import 'react-native-gesture-handler';
 
 import {TouchableOpacity} from 'react-native-gesture-handler';
 const styles = StyleSheet.create({
   container:{
     padding:'2px',
     backgroundColor: 'skyblue',
     flex:1,
     alignItems: "center",
     width: '100%',
     height: '100%'
   },
   body:{
     width: '100%',
     height: '100%',
     padding:'5px',
     alignItems:'center'
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
   seperatorStyle: {
     height: 1,
     backgroundColor: 'black',
     paddingTop: 2,
     marginTop: 2,
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
   },
   scrollView: {
     width: '100%',
     height: '100%',
     backgroundColor: 'white',
   },
   mainBtn :{
     height:'50px',
     width:'100%',
     justifyContent:'center',
     alignItems:'center',
     borderBottomWidth:'1px',
     borderBottomColor:'black',
     borderStyle:'solid',
   },
   btnText:{
     fontSize:'20px'
   }
 })
 function SavedOrder({navigation}) {
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView style={styles.container}>
  
           <View style={styles.body}>
             <View style={styles.mainBtn}>
               <TouchableOpacity
                 onPress={() =>
                   navigation.navigate('Create Order', {name: 'Create Order'})
                 }>
                 <Text style={styles.btnText}>Order1</Text>
               </TouchableOpacity>
             </View>
             <SeparatorComponent/>
             <View style={styles.mainBtn}>
               <TouchableOpacity
                 onPress={() => navigation.navigate('Story', {name: 'Story'})}>
                 <Text style={styles.btnText}>Order2</Text>
               </TouchableOpacity>
             </View>
             <SeparatorComponent/>
             <View style={styles.mainBtn}>
               <Text style={styles.btnText}>Order3</Text>
             </View>
           </View>
       </SafeAreaView>
     </>
   );
 }
 
 const SeparatorComponent = () => {
   return <View style={styles.seperatorStyle} />;
 };
 
 export default SavedOrder;
 