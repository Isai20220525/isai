import {StatusBar} from 'expo-status-bar'
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Photo from './Photo'
import Header from './Header'

export default function Contact({navigation}) {
  return (
    <View style={styles.container}>
      <Photo />
      <Header />
      <Text>This is Contact Page</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home')
        }
      ></Button>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
