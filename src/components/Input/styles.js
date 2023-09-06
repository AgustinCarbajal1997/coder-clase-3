import { StyleSheet } from "react-native";
import THEME from "../../utils/themes";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 4,
    borderColor: THEME.colors.lightBlue,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    height: 20,
    flex: 10,
  },
  inputButton: {
    flex: 1,
  },
  lightmode: {
    color: THEME.colors.black,
  },
  darkmode: {
    color: THEME.colors.white,
  },
});

export default styles;
