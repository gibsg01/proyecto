import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, Text, View, Button, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style ={styles.container}>
    <View style={{PaddingTop: Platform.OS === "ANDROID" && 30}}>
      <Text style={styles.text}>Pomodoro</Text>
      <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32, 
    fontWeight: "bold",
    color: "black",
  },
});