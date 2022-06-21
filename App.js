/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ItemList from './itemList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      text:"",
      data:[]
    }
  }

  handleSave = () => {
    const { text, data } = this.state;
    data.push({text})
    this.setState({data,text:""})
  }

  handleDelete = (todoText) => {
    let tempData = this.state.data.filter(item => item.text !== todoText);
    this.setState({data:tempData})
  }

  render() {
    return (
      <SafeAreaView style={[{flex:1}]}>
        <View style={style.title}>
          <Text style={style.title_text}>Ali To-Do Application</Text>
        </View>
        <View style={{backgroundColor:"#ccc",padding:10,flexDirection:"row"}}>
          <TextInput style={style.input} onChangeText={(text) => {this.setState({text})}} value={this.state.text}/>
          <TouchableOpacity style={style.button} onPress={this.handleSave}>
            <Text style={style.title_text}>Ekle</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {this.state.data.map((item,index) => {
            return (
              <ItemList key={index} text={item.text} handleDelete={this.handleDelete}/>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    )

  }
}

const style = StyleSheet.create({
  wellcome_area:{paddingTop:150,backgroundColor:"red",flex:1},
  wellcome_text:{fontSize:30,color:"white"},
  title:{ backgroundColor:"blue",padding:10},
  title_text:{color:"white",textAlign:"center",fontSize:16,fontWeight:"700"},
  input:{padding:10,backgroundColor:"white",color:"black",flex:1},
  button:{padding:10,backgroundColor:"blue",borderRadius:5,marginLeft:10}
})

//export default App;
