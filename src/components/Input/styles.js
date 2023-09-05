import { StyleSheet } from "react-native";
import THEME from "../../utils/themes";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 4,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: THEME.colors.lightgray,
    borderWidth: 2,
    height: 40,
    borderRadius: 10,
  },
  lightmode: {
    color: THEME.colors.black,
  },
  darkmode: {
    color: THEME.colors.white,
  },
});

export default styles;
