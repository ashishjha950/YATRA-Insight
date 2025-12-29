import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { OnboardingSlide } from '../../../shared/components/OnboardingSlide';
import Button from '../../../shared/components/Button';
import { Colors } from '../../../shared/contants/theme';

const slides = [
  {
    icon: 'map',
    color: Colors.primary,
    title: 'Trip Capture',
    description: 'Automatically capture your travel journey with GPS tracking',
  },
  {
    icon: 'shield',
    color: Colors.safety,
    title: 'Safety First',
    description: 'Stay safe with real-time alerts & SOS emergency features',
  },
  {
    icon: 'trending-up',
    color: Colors.insights,
    title: 'Smart Insights',
    description: 'Get intelligent insights for you & tourism planning',
  },
];

const OnboardingScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index === slides.length - 1) {
      navigation.replace('Login');
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <View style={styles.container}>
      <OnboardingSlide {...slides[index]} />

      <Button
        title={index === slides.length - 1 ? 'Get Started' : 'Next'}
        onPress={next}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
    paddingVertical: 60,
  },
});
