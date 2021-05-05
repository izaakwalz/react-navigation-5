import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', flex: 1, marginTop: 64 }}>
        <Image
          source={require('../assets/home.png')}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode='contain'
        />
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: '100', fontSize: 32 }}>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Music', {
              userName: 'izaakwalz',
              action: 'code',
            });
          }}
        >
          <Text style={{ color: '#fff' }}>Music Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderColor: '#f40057',
              borderWidth: 1,
              marginTop: 12,
              backgroundColor: '#fff',
            },
          ]}
          onPress={() => {
            navigation.navigate('SettingsTab');
          }}
        >
          <Text style={{ color: '#f40057' }}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

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
});
