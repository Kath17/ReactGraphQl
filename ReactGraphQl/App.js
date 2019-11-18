import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Header from './Modulos/Header';

export default function App() {
  const [enteredUser, setEnteredUser] = useState('');
  const [enteredValue, setEnteredValue] = useState('');

  const userInputHandler = (enteredText) => {
    setEnteredUser(enteredText);
  };

  const confirmInputHandler = () =>{
    if(enteredUser.length === 0){
      Alert.alert('Input vacío','Debe ingresar algún usuario',[{text:'Ok',style: 'destructive'}])
      return;
    }
    console.log(enteredUser);
    setEnteredValue(enteredUser);
    setEnteredUser('');
  };

  return (
    <TouchableWithoutFeedback
      onPress={()=>{
        Keyboard.dismiss();
      }}
    >
    <View style={styles.container}>
      <Header title="Github Repositories"/>
      <View style = {styles.inputContainer}>
        <TextInput
          placeholder = "Search github user"
          style={styles.input}
          onChangeText = {userInputHandler}
          value={enteredUser} />
        <Button color='#7d3c98' title="Search" onPress={confirmInputHandler}/>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop:40,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  inputContainer: {
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    height: 35,
    borderColor: '#7d3c98',
    borderWidth: 0.4,
    padding: 10
  }
});
