import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={{backgroundColor:'white'}}>
    
        <Header
          backgroundColor={'lavender'}
          centerComponent={{
            text: 'Text To Speech Coverter',
            style: { color: 'black', fontSize: 15, fontWeight: 'bold' },
          }}
        />

        
         <Image
          style={{
            width: 150,
            height: 150,
            borderColor: 'lavender',
            borderWidth:4,
            marginTop: 35,
            alignSelf:'center',
            borderRadius:20
          }}
          source={{
            uri:
            'https://cdn.dribbble.com/users/1144754/screenshots/2978120/is-to-identify.gif'
          }}
        />
        

        <Text style={styles.title}>Enter the word</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.speak();
          }}>
          <Text style={styles.buttonText}>Click Here !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 15,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderRadius: 15,
    outline: 'none',
  },
 

  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 17,
  },

  button: {
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 28,
    backgroundColor: 'lavender',
    borderWidth: 1,
    padding: 5,
    width: 170,
    height: 40,
    
  },
  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
