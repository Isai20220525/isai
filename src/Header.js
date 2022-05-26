import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Photo from '..\\src\\Photo';

export default function Header() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Hello React Native</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontFamily: 'serif',
      fontSize: 40,
      color: 'blue'
    }
  });