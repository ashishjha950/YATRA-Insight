import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

export function IconBackground({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.wrapper}>
      <BlurView intensity={25} tint="light" style={styles.blur}>
        {children}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden', // 🔥 VERY IMPORTANT for blur
  },
  blur: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    /* glass highlight */
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
});
