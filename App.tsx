import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button, Text } from 'react-native-paper';


function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Infinite Tsukoyomi</Text>
      <Button mode="contained" onPress={() => console.log('Button pressed')}>
        Click Me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
