import { View, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Colors from "../../utilities/Colors";
import Images from "../../utilities/Images";

export default function Splash( { navigation }) {
  useEffect(() => {
    setTimeout(function(){navigation.navigate('Login')}, 2000)
  }, []);

  return (
    <View style={styles.container}>
        <Image style={styles.content} source={Images.LOGO_YELLOW}/>
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
