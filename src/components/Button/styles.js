import { StyleSheet } from "react-native";
import THEME from "../../utils/themes";

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.colors.lightred,
    borderRadius: 10,
    padding: 10,
    height: 40,
  },
  buttonText: {
    color: THEME.colors.white,
  },
});

export default styles;
