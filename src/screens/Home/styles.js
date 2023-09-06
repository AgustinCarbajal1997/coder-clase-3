import { Dimensions, StyleSheet } from "react-native";
import THEME from "../../utils/themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    rowGap: 20,
  },
  image: {
    width: Dimensions.get("screen").width,
    aspectRatio: 1 / 1,
  },
});

export default styles;
