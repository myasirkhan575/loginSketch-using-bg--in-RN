import React from 'react';
import
{
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,

} from 'react-native';

import
{
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Button } from 'react-native-elements';

const logoimg = require('../loginsketch/d14d160dedffbe9ceb96426d6441b955.jpg');
const backgroundImage = require('../loginsketch/d14d160dedffbe9ceb96426d6441b955.jpg');
const { width, height } = Dimensions.get("window");

const App = (props) =>
{
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{
        flex: 1
      }}>
        <View style={{ position: 'absolute', zIndex: 1, width: width, height: height, }}></View>
        <ImageBackground source={backgroundImage} style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          height: height,
        }} >

          <View style={{ alignContent: 'center', justifyContent: 'center' }} ><Image
            source={logoimg}
            style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 170, paddingBottom: 10 }}
          /></View>
          <Text h1 style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop: 30, fontSize: 40 }}>LOGIN</Text>
          <TextInput
            style={styles.txtinp1} placeholder="Email" />
          <TextInput
            style={styles.txtinp2} placeholder="Password" />


          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={.5}
          // onPress={ this.ButtonClickCheckFunction }
          >
            <Text style={{ color: 'white', textAlign: 'center', paddingTop: 5 }}>Getting Started</Text>
          </TouchableOpacity>

          {/* <View style={styles.fixToText}>
            <Button style={styles.btns}
              title="Left button"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <Button
              title="Right button"
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View> */}
          <View style={styles.fixToText}>
            <Button
              title="Create Account"
              type="clear"
            />
            <Button
              title="Forget Password"
              type="clear"
            />
          </View>

        </ImageBackground>




      </ScrollView>
    </SafeAreaView>




  );
};

const styles = StyleSheet.create({
  txtinp1: {
    height: 45,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 20,
    marginLeft: 40,
    marginRight: 40,
    textAlign: "center",
    color: 'white'
  },
  txtinp2: {
    height: 45,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    marginLeft: 40,
    marginRight: 40,
    textAlign: "center",
    color: 'white'
  },
  SubmitButtonStyle: {
    marginTop: 35,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 40,
    backgroundColor: '#00BCD4',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
    color: 'white',
    height: 45,

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 40,
    marginLeft: 40,


  },
  btns: {
    borderRadius: 20,
    backgroundColor: 'black'
  }


})

export default App;
