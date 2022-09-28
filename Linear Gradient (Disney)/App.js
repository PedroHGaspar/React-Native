import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#050627', '#1f469a']}
        style={styles.background}
      />
       <Image
        style={{
          width: 241,
          height: 131,
        }}
        source={{
          uri: 'https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-1.png',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 870,
  },
});

// Home.js

// ...
//       <Text>Home Screen</Text>
//       <TouchableOpacity onPress={() => {}}>
//         <LinearGradient
//           start={{ x: 0, y: 0 }}
//           end={{x: 1, y: 1 }}
//           colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']}
//           style={styles.instagramButton}
//           >
//           <Text style={{ color: 'white' }}>
//             Sign In With Instagram
//           </Text>
//         </LinearGradient>
//       </TouchableOpacity>
//       <LinearGradient
//         start={{ x: 0, y: 0 }}
//         end={{x: 1, y: 1 }}
//         colors={[ 'red', 'yellow', 'green' ]}
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 10,
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => {}}
//           style={styles.signUpButton}
//         >
//           <Text>Sign Up</Text>
//         </TouchableOpacity>
//       </LinearGradient>

// ...

// // styles
//   instagramButton: {
//     paddingHorizontal: 40,
//     paddingVertical: 10,
//     borderRadius: 10,
//     margin: 20
//   },
//   signUpButton: {
//     margin: 1,
//     width: 200,
//     borderRadius: 10,
//     paddingVertical: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },