import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const waterLoad = require("@assets/animations/waterload.json");

const LoadingScreen = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container} id='container'>
      <View style={styles.animationContainer} id='test'>
        <LottieView
          ref={animation}
          style={{ width: 200, height: 200 }}
          source={waterLoad}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    width: '100%',
    height: '100%',
  },
  animationContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;