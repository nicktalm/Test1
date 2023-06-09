import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";

const Home = ({navigation})=>{

  function navigate2(){
    navigation.navigate('Site1');
  }
  function navigate3(){
    navigation.navigate('Site2');
  }
  function navigate4(){
    navigation.navigate('Site3');
  }
  function navigate5(){
    navigation.navigate('Site4');
  }
  function navigate6(){
    navigation.navigate('Site5');
  }
  function navigate7(){
    navigation.navigate('Site6');
  }
  
    return(
        <ScrollView style={styles.TopView}>
           <View style={styles.ButtonBox}>
            <TouchableOpacity style={styles.Button} onPress={navigate2}>
                <Text style={styles.ButtonText}>Einrichten der Entwicklungsumgebung</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate3}>
                <Text style={styles.ButtonText}>Node & Watchman</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate4}>
                <Text style={styles.ButtonText}>Ruby</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate5}>
                <Text style={styles.ButtonText}>Xcode</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate6}>
                <Text style={styles.ButtonText}>Erstellen einer neuen Anwendung</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate7}>
                <Text style={styles.ButtonText}>Ausführen Ihrer React Native-Anwendung</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    TopView:{
      marginTop:0,
      backgroundColor:'#03396C'
    },
    ButtonBox:{
        marginTop:20,
        marginLeft:40,
        marginRight:40,
      },
    Button:{
        width:'100%',
        color:"#000",
        height:60,
        backgroundColor:"#fff",
        borderRadius:10,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
      },
   

  })
  
export default Home;