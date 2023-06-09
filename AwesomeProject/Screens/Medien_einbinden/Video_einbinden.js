import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
import { copyToClipBoard } from '../../function';
import Video from 'react-native-video';

const Site1 = ({navigation})=>{

    return(
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>Video einbinden</Text>
            </View>
            <View style={styles.video}>
            <Video  source={{uri:'/Users/nicktalmon/Desktop/Test1/Test1/AwesomeProject/Assets/videos/Videobeispiel2.mp4'}}
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo}
            controls={true} 
            paused={true}
            />
            </View>
            <Text style={styles.Fließtext}>Das ist ein Beispielvideo</Text>
            <Text style={styles.Fließtext}>Um eine Video-Datei in ein React Native-Projekt einbinden zu können, muss man erst das „react-native-video“-Paket mit folgendem Befehl in der Kommandozentrale installieren.</Text>
            <View style={styles.kopierTextBox}>
            <Text style={styles.kopierText}>
            npm install react-native-video
            </Text>
            <TouchableOpacity style={styles.kopierTextButton} onPress={copyToClipBoard.bind(this,"npm install react-native-video")}>
            <Icon style={styles.kopierTextButton} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
            <Text style={styles.Fließtext}>Anschließend muss man wie beim Einbinden der Bilder die benötigten Komponenten in die Datei importieren.</Text>
            <View style={styles.ImageStyle}>
            <Image style={styles.ImageStyleBild} source={require('../../Assets/images/Scrennshots/Video_1.png')} />
            </View>
            <Text style={styles.Fließtext}>Die „Video“-Komponente wird verwendet, um das Video einzubinden. Der „source“-Prop muss den genauen Pfad oder die URL des Videos enthalten.</Text>
            <View style={styles.ImageStyle2}>
            <Image style={styles.ImageStyleBild} source={require('../../Assets/images/Scrennshots/Video_2.png')} />
            </View>
            <Text style={styles.Fließtext}>Der Pfad kann ebenso zu einem Unterordner führen, wie man im oberen Kapitel zu den Bildern sieht. Auch hier muss man auf Groß- und Kleinschreibung achten.</Text>
            <Text style={styles.Fließtext}>Im Gegensatz zum Einbinden von Bildern, bietet das „react-native-video“-Paket bei der „Video“-Komponente viele weitere Optionen und Möglichkeiten zur Steuerung des Videos, wie z.B. die Möglichkeit, Wiedergabesteuerungen hinzuzufügen, das Video in Schleife abzuspielen oder Ereignisse zu überwachen.</Text>  
            <Text style={styles.Fließtext}>Es gibt auch beim Einbinden von Videos mehrere Möglichkeiten, je nach Anforderung der App gibt es mehrere Ansätze, die man berücksichtigen sollte.</Text>
            <Text style={styles.Fließtext}></Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    TopView:{
    },
    HeadlineBox:{
      paddingLeft:30,
      paddingRight:10,
      height:50,
      marginTop:20,
    },
    Headline:{
      fontSize:28,
      fontWeight:'bold',
      color:'#03396C',
    },
    Fließtext:{
      marginBottom:15,
      paddingLeft:30,
      paddingRight:30,
      fontSize:15
    },
    ArrowRightIcon:{
      
    },
    ForwardbuttonBox:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#03396C',
      height:80,
      borderRadius:50,
      paddingLeft:30,
      paddingRight:30,
      marginLeft:10,
      marginRight:10,
      marginTop:20,
    },
    Forwardbutton:{
      width:'25%',
      color:"#fff",
      height:50,
      backgroundColor:'lightblue',
      borderRadius:10,
      marginTop:15,
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
    },
    ImageStyle:{
      marginTop:-130,
      marginBottom:-110,
      width:'50%',
      resizeMode:'contain',
      marginLeft:30,
      marginRight:30,
    },
    ImageStyle2:{
      marginTop:-110,
      marginBottom:-90,
      width:'50%',
      resizeMode:'contain',
      marginLeft:30,
      marginRight:30,
    },
    ImageStyleBild:{
      width:Dimensions.get("window").width-60,
      height:Dimensions.get("window").width-60,
      resizeMode:'contain'
    },
    kopierTextBox:{
      marginTop:10,
      backgroundColor:'#03396C',
      height:50,
      display:'flex',
      alignItems:'flex-start',
      justifyContent:'flex-start',
      flexDirection:'row',
      justifyContent:'space-between',
      borderRadius:10,
      marginBottom:20,
      paddingLeft:20,
      paddingRight:20,
      marginLeft:20,
      marginRight:20
    },
    kopierText:{
      color:'white',
      marginLeft:0,
      marginTop:15,
    },
    kopierTextButton:{
      marginRight:0,
      marginTop:3.5,
    },
    backgroundVideo:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    video:{
      width:Dimensions.get("window").width-60,
      height:(Dimensions.get("window").width-60)/(16/9),
      marginLeft:30,
      marginBottom:10,
    },
  })
export default Site1;
