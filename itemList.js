import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const ItemList = ({text,handleDelete}) => {
    return (
        <View style={style.card}>
            <Text style={{color:"black",flex:16}}>{text}</Text>
            <TouchableOpacity style={{flex:1,borderColor:"red",borderWidth:2,alignItems:"center",borderRadius:50}} onPress={() => handleDelete(text)}>
                <Text style={{color:"red"}}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    card:{padding:10,backgroundColor:"#ddd",margin:5,borderColor:"gray",borderWidth:2,borderRadius:10,flexDirection:"row"}
})

export default ItemList;