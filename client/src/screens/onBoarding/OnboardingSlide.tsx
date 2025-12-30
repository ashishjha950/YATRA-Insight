import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
  item: any;
};

export default function OnboardingSlide({ item }: Props) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 40,
    resizeMode: "contain"
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10
  },
  desc: {
    fontSize: 15,
    textAlign: "center",
    color: "#6B7280"
  }
});
