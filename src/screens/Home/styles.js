import { StyleSheet } from "react-native";
import THEME from "../../utils/themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    rowGap: 20,
  },
  lightmode: {
    backgroundColor: THEME.mode.lightmode,
  },
  darkmode: {
    backgroundColor: THEME.mode.darkmode,
  },
  containerAddItem: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
});

export default styles;
