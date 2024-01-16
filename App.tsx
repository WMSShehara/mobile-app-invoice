import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Layout from './components/Invoice';

export default function App() {
  const backgroundImage = require('./components/images/dark-circle.png');
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={{width: 250, height: 250, position: 'absolute', top:-160, left:-100}}/>
      <ImageBackground source={backgroundImage} style={{width: 100, height: 100, position: 'absolute', top:-30, left:280}}/>
      <Layout 
        recieverName="Jane Doe"
        amount="5,60€"
        date="12 January 2024"
        referenceNumber="03456790"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#406C6C',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
