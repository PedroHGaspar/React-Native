//--------------------useState--------------------

import { useState } from 'react';
import {
    View,
    Text,
  } from 'react-native';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Text onPress={() => setCount(count + 1)}>
        Click me
      </Text>
    </View>
  );
}


//--------------------useEffect--------------------