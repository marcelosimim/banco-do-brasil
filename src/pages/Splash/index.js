import { View, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../utilities/Colors";

export default function Splash() {
  return (
    <View style={styles.container}>
        <Image style={styles.content} source={require('../../../assets/logo_bb.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.YELLOW,
    flex: 1,
    justifyContent: "center", 
    alignItems: "center"
  },
  content: { 
    width: 100,
    height: 100,
  }
});
