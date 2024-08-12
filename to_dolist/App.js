import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './components/Tasks';

export default function App() {
  const [task,setTask]=useState();

  const [taskItem,settt] =useState([])


    const handletask=()=>{
      Keyboard.dismiss();
       settt([...taskItem,task])
       setTask(null);
    }


    const completetask=(index)=>{
      let itemsc=[...taskItem];
      itemsc.splice(index,1);
      settt(itemsc);
    }


  return (
    <View style={styles.container}>

      <View style={styles.taskwrapper}>
        <Text style={styles.sectiontitle}>Today's Task</Text>

        {
          taskItem.map((item,index)=>{
             return (
              <TouchableOpacity key={index} onPress={()=>completetask(index)}>
                <Tasks  text={item}/>

              </TouchableOpacity>
             )
          })
        }
        {/* <Tasks text='this is task' />
        <Tasks text='this is task2' /> */}

        <View style={styles.items}>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? 'height' : 'padding'}
        style={styles.writetaskwrapper}

      >
        <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text=>setTask(text)} />
        <TouchableOpacity onPress={()=>handletask()}>
          <View style={styles.addwrapper}>
            <Text style={styles.addtext}>
              +
            </Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  taskwrapper: {
    paddingTop: 80,
    paddingHorizontal: 30,

  },
  sectiontitle: {
    fontSize: 30,
    fontWeight: 'bold',



  },
  items: {

  },


  writetaskwrapper: {
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15,
    


  },
  input: {
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    width:250,
    borderRadius:45,
    borderColor:'#C0C0C0',
    borderWidth:2,

  },
  addwrapper: {
    height:60,
    width:60,
    backgroundColor:'#fff',
    borderColor:'#C0C0C0',
    borderWidth:2,
    borderRadius:45,
    alignItems:'center',
    justifyContent:'center',


  },
  addtext: {
    fontSize:20,
    
  },
});
