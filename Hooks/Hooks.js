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

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </View>
  );
}

                                                                                                                                                               

import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }); 

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}


//----------------------------------------