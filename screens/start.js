import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name='Root' component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={{ width: '100%', flex: 1, marginTop: 64 }}>
//         <Image
//           source={require('./assets/home.png')}
//           style={{ width: undefined, height: undefined, flex: 1 }}
//           resizeMode='contain'
//         />
//       </View>
//       <View style={{ flex: 2, alignItems: 'center' }}>
//         <Text style={{ fontWeight: '100', fontSize: 32 }}>Home Screen</Text>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             navigation.navigate('Music', {
//               userName: 'izaakwalz',
//               action: 'code',
//             });
//           }}
//         >
//           <Text style={{ color: '#fff' }}>Music Screen</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// function MusicScreen({ route, navigation }) {
//   let { userName, action } = route.params;

//   let [liked, setLiked] = React.useState(false);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
//           <FontAwesome5
//             name={liked ? 'heart' : 'user'}
//             size={24}
//             color='#f40057'
//             style={{ marginRight: 16 }}
//           />
//         </TouchableOpacity>
//       ),
//     });
//   });

//   return (
//     <View style={styles.container}>
//       <View style={{ width: '100%', flex: 1, marginTop: 64 }}>
//         <Image
//           source={require('./assets/music.png')}
//           style={{ width: undefined, height: undefined, flex: 1 }}
//           resizeMode='contain'
//         />
//       </View>
//       <View style={{ flex: 2, alignItems: 'center' }}>
//         <Text style={{ fontWeight: '100', fontSize: 32 }}>Music Screen</Text>
//         <Text style={{ fontWeight: '600', marginVertical: 32 }}>
//           {userName} ❤ to {action}
//         </Text>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             navigation.navigate('Home');
//           }}
//         >
//           <Text style={{ color: '#fff' }}>Home Screen</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.button,
//             {
//               borderColor: '#f40057',
//               borderWidth: 1,
//               marginTop: 12,
//               backgroundColor: '#fff',
//             },
//           ]}
//           onPress={() => {
//             navigation.goBack();
//           }}
//         >
//           <Text style={{ color: '#f40057' }}>Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
