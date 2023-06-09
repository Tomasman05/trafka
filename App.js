import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
 const [count,setCount]= useState(0)
  function increment(){
    setCount(count+1)
  };
  function reset(){
    setCount(0)
  }
  function decrease(){
    setCount(count-1)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Számláló</Text>
      <Text style={styles.count}>{count}</Text>
      <Button title="Növel"
      onPress={increment}/>
      <Button title="Csökkent"
      onPress={decrease}/>
      <Button title="Reset"
      onPress={reset}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'white',
    fontSize:32,
  },
  count:{
    color:'yellow',
    fontSize:44,
    alignItems: 'center',
  },
});
