import { StyleSheet } from "react-native";
import THEME from "../../utils/themes";

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.darkred,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    color: THEME.colors.white,
    fontSize: THEME.fontSize.heading,
    fontWeight: THEME.fontWeight.mainBold,
    textAlign: "center",
  },
});

export default styles;
