import { StatusBar } from 'expo-status-bar'
import {
  Button,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Alert,
} from 'react-native'

export default function App() {
  const alertMessage = () =>
    Alert.alert('My Title', 'My message', [
      { text: 'Yes', onPress: () => console.log('Yes') },
      { text: 'No', onPress: () => console.log('No') },
    ])

  const alertPrompt = () =>
    Alert.prompt('My Title', 'Me Message', (text) => console.log(text))

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Worlds!</Text>
      <Button
        // onPress={onPressLearnMore}
        title='Learn More'
        color='#000'
        accessibilityLabel='Learn more about this purple button'
        onPress={alertPrompt}
      />
      <TouchableHighlight onLongPress={() => console.log('Image tapped!')}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableHighlight>

      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
