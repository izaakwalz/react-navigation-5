import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

const Music = ({ route, navigation }) => {
  let { userName, action } = route.params;

  let [liked, setLiked] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
          <FontAwesome5
            name={liked ? 'heart' : 'user'}
            size={24}
            color='#f40057'
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', flex: 1, marginTop: 64 }}>
        <Image
          source={require('../assets/music.png')}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode='contain'
        />
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: '100', fontSize: 32 }}>Music Screen</Text>
        <Text style={{ fontWeight: '600', marginVertical: 32 }}>
          {userName} ❤ to {action}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Text style={{ color: '#fff' }}>Home Screen</Text>
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
            navigation.goBack();
          }}
        >
          <Text style={{ color: '#f40057' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Music;

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
