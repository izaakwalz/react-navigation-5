import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Home from './screens/Home';
import Music from './screens/Music';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function CustomHeader() {
  return <FontAwesome5 name='music' size={23} color='#f40057' />;
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', flex: 1, marginTop: 64 }}>
        <Image
          source={require('./assets/settings.png')}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode='contain'
        />
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: '100', fontSize: 32 }}>Settings Screen</Text>
      </View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', flex: 1, marginTop: 64 }}>
        <Image
          source={require('./assets/details.png')}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode='contain'
        />
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: '100', fontSize: 32 }}>Details Screen</Text>
      </View>
    </View>
  );
}

function Badge({ name, count, color, size }) {
  return (
    <View style={{ width: 24, height: 24 }}>
      <FontAwesome name={name} size={size} color={color} />
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={{ color: '#fff', fontSize: 10, fontWeight: '600' }}>
            {count}
          </Text>
        </View>
      )}
    </View>
  );
}

const Stack = createStackNavigator();
const Settings = createBottomTabNavigator();

function SettingsTab() {
  return (
    <Settings.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Settings') {
            return <Badge name='cog' color={color} size={size} count={8} />;
          }
          return <FontAwesome5 name='paperclip' size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#f40057',
        inactiveTintColor: 'gray',
      }}
    >
      <Settings.Screen name='Settings' component={SettingsScreen} />
      <Settings.Screen name='Details' component={DetailsScreen} />
    </Settings.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#f40057',
          headerTitleStyle: {
            fontWeight: '200',
            fontSize: 30,
          },
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='Music'
          component={Music}
          options={{
            headerTitle: (props) => <CustomHeader {...props} />,
          }}
        />
        <Stack.Screen name='SettingsTab' component={SettingsTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#f40057',
    paddingVertical: 12,
    width: 250,
    borderRadius: 14,
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: '#FF6583',
    borderRadius: 8,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
