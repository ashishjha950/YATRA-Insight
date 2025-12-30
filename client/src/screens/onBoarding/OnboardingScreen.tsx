// import {
//   View,
//   FlatList,
//   Animated,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions
// } from "react-native";
// import { useRef, useState } from "react";
// import { onboardingData } from "./onboarding.data";
// import OnboardingSlide from "./OnboardingSlide";
// import { useNavigation } from "@react-navigation/native";

// const { width } = Dimensions.get("window");

// export default function OnboardingScreen() {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const navigation = useNavigation<any>();
//   const [index, setIndex] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Animated.FlatList
//         data={onboardingData}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         onViewableItemsChanged={({ viewableItems }) =>
//           setIndex(viewableItems[0]?.index ?? 0)
//         }
//         renderItem={({ item }) => <OnboardingSlide item={item} />}
//       />

//       {/* Dots */}
//       <View style={styles.dots}>
//         {onboardingData.map((_, i) => (
//           <View
//             key={i}
//             style={[styles.dot, index === i && styles.activeDot]}
//           />
//         ))}
//       </View>

//       {/* Button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() =>
//           index === 2
//             ? navigation.replace("Login")
//             : null
//         }
//       >
//         <Text style={styles.btnText}>
//           {index === 2 ? "Get Started" : "Next"}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   dots: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 20
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#D1D5DB",
//     marginHorizontal: 4
//   },
//   activeDot: {
//     width: 20,
//     backgroundColor: "#1D4ED8"
//   },
//   button: {
//     marginHorizontal: 24,
//     backgroundColor: "#1D4ED8",
//     padding: 16,
//     borderRadius: 30,
//     alignItems: "center",
//     marginBottom: 40
//   },
//   btnText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600"
//   }
// });



import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Trip Capture',
    description: 'Automatically capture your travel journey with GPS tracking',
    iconColor: '#2196F3',
    bgColor: '#E3F2FD',
    iconType: 'pin',
  },
  {
    id: '2',
    title: 'Safety First',
    description: 'Stay safe with real-time alerts & SOS emergency features',
    iconColor: '#26C6DA',
    bgColor: '#E0F7FA',
    iconType: 'shield',
  },
  {
    id: '3',
    title: 'Smart Insights',
    description: 'Get intelligent insights for you & tourism planning',
    iconColor: '#FFA726',
    bgColor: '#FFF3E0',
    iconType: 'chart',
  },
];

const PinIcon = ({ color }: { color: string }) => (
  <View style={styles.iconWrapper}>
    <View style={[styles.pinOuter, { backgroundColor: color }]}>
      <View style={[styles.pinInner, { backgroundColor: '#fff' }]} />
    </View>
    <View style={[styles.pinBottom, { borderTopColor: color }]} />
  </View>
);

const ShieldIcon = ({ color }: { color: string }) => (
  <View style={[styles.shieldContainer]}>
    <View style={[styles.shieldTop, { borderBottomColor: color }]} />
    <View style={[styles.shieldBottom, { backgroundColor: color }]} />
  </View>
);

const ChartIcon = ({ color }: { color: string }) => (
  <View style={styles.chartContainer}>
    <View style={[styles.chartLine, { borderColor: color }]} />
    <View style={[styles.chartArrowHorizontal, { borderLeftColor: color }]} />
    <View style={[styles.chartArrowVertical, { borderBottomColor: color }]} />
  </View>
);

export default function OnboardingScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace('Auth', {
        screen: 'Login'
      });
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <View style={[styles.iconCircle, { backgroundColor: item.bgColor }]}>
        <View style={styles.iconInnerCircle}>
          {item.iconType === 'pin' && <PinIcon color={item.iconColor} />}
          {item.iconType === 'shield' && <ShieldIcon color={item.iconColor} />}
          {item.iconType === 'chart' && <ChartIcon color={item.iconColor} />}
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.listContainer}>
        <FlatList
          ref={slidesRef}
          data={slides}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.paginationContainer}>
          {slides.map((_, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];

            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [8, 24, 8],
              extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={index}
                style={[styles.dot, { width: dotWidth, opacity }]}
              />
            );
          })}
        </View>

        <TouchableOpacity style={styles.button} onPress={scrollTo}>
          <Text style={styles.buttonText}>
            {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
          <Text style={styles.buttonArrow}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    flex: 1,
  },
  slide: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  iconInnerCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  pinOuter: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -8,
  },
  pinInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  pinBottom: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  shieldContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shieldTop: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  shieldBottom: {
    width: 70,
    height: 40,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    marginTop: -2,
  },
  chartContainer: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  chartLine: {
    width: 50,
    height: 50,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    position: 'absolute',
    bottom: 5,
    left: 10,
  },
  chartArrowHorizontal: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    position: 'absolute',
    right: 8,
    bottom: 2,
  },
  chartArrowVertical: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderBottomWidth: 8,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    position: 'absolute',
    left: 7,
    top: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2196F3',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonArrow: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});