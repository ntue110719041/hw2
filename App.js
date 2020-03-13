import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView>
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>專輯</Text>
    </View>
    <View style={styles.container}>
    <View style={styles.container1}>
      <Image style={styles.img1} source={require("./imgs/beach.jpg")} />
      <Image style={styles.img2} source={require("./imgs/forest.jpg")} />
    </View>
    <View style={styles.container2}>
      <Text style={styles.text1}>beach</Text>
      <Text style={styles.text2}>forest</Text>
    </View>
    <View style={styles.container1}>
      <Image style={styles.img1} source={require("./imgs/beach.jpg")} />
      <Image style={styles.img2} source={require("./imgs/forest.jpg")} />
    </View>
    <View style={styles.container2}>
      <Text style={styles.text1}>beach</Text>
      <Text style={styles.text2}>forest</Text>
    </View>
    <View style={styles.container1}>
      <Image style={styles.img1} source={require("./imgs/beach.jpg")} />
      <Image style={styles.img2} source={require("./imgs/forest.jpg")} />
    </View>
    <View style={styles.container2}>
      <Text style={styles.text1}>beach</Text>
      <Text style={styles.text2}>forest</Text>
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,
  },
  textStyle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flexDirection:'row',
    padding:10,
  },
  container2: {
    flexDirection:'row',
  },
  img1:{
    width:150,
    height:150,
    marginRight:10,
  },
  text1:{
    marginRight:60,
    fontSize: 20,
  },
  img2:{
    width:150,height:150,marginLeft:10,
  },
  text2:{
    marginLeft:60,
    fontSize: 20,
  },
  img3:{
    width:100,height:100,
  },
});

export default App;