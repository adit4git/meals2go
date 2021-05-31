import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";




export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.search}>search</Text>
        <Text style={styles.result}>list</Text>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    marginTop: StatusBar.currentHeight,
  },
  search: {   
    backgroundColor: "green",
    padding: 16,
  },
  result: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
