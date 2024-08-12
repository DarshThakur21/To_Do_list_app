import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Tasks = (props) => {
    return (
        <View style={styles.items} >
            <View style={styles.itemleft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemtext}>{props.text}</Text>

            </View>
            <View style={styles.circle}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    items: {
        marginTop:12,
        backgroundColor:'#fff',
        padding:15,
        borderRadius:19,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        

    },
    itemleft: {
        flexDirection:'row',
        alignItems:"center",
        flexWrap:'wrap',


    },
    square: {
        width:24,
        height:24,
        backgroundColor:'#55BC',
    //    borderBlockColor:"#55BCF6",
        borderColor:'#55BCF6',
        borderWidth:1,
        opacity:0.4,
        borderRadius:7,
        marginRight:16,

    },
    itemtext: {
        maxWidth:'80%',


    },
    circle: {
        width:12,
        height:12,
        borderColor:'#55BC',
        borderWidth:3,
        borderRadius:6,

    },
});




export default Tasks


