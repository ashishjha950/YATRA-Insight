import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const dotAnim1 = useRef(new Animated.Value(0.3)).current;
  const dotAnim2 = useRef(new Animated.Value(0.3)).current;
  const dotAnim3 = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    const dotAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(dotAnim1, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dotAnim2, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dotAnim3, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(dotAnim1, {
            toValue: 0.3,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.timing(dotAnim2, {
            toValue: 0.3,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.timing(dotAnim3, {
            toValue: 0.3,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ])
    );

    dotAnimation.start();

    return () => dotAnimation.stop();
  }, []);

  return (
    <LinearGradient
      colors={['#1976D2', '#1565C0', '#0D47A1']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar style="light" />
      <Animated.View 
        style={[
          styles.content,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
        ]}
      >
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <View style={styles.pinOuter}>
              <View style={styles.pinInner} />
            </View>
            <View style={styles.pinBottom} />
          </View>
        </View>

        <Text style={styles.title}>Smart Travel Companion</Text>
        <Text style={styles.subtitle}>Travel Smart. Travel Safe.</Text>

        <View style={styles.dotsContainer}>
          <Animated.View style={[styles.dot, { opacity: dotAnim1 }]} />
          <Animated.View style={[styles.dot, { opacity: dotAnim2 }]} />
          <Animated.View style={[styles.dot, { opacity: dotAnim3 }]} />
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 40,
  },
  iconCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  pinOuter: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -10,
  },
  pinInner: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#1976D2',
  },
  pinBottom: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginTop: 12,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 60,
    gap: 12,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
});
