import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  imagePortrait: {
    width: "90%",
    aspectRatio: 1 / 1,
    alignSelf: "center",
  },
  imageLanscape: {
    width: 220,
    aspectRatio: 1 / 1,
    alignSelf: "center",
  },
});

export default styles;
