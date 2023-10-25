import { StyleSheet } from "react-native";
import THEME from "../../utils/themes";

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: THEME.colors.mediumBlue,
    backgroundColor: THEME.colors.mediumBlue,
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  itemText: {
    color: THEME.colors.white,
    fontSize: THEME.fontSize.subheading,
    fontFamily: THEME.fontFamily.josefinRegular,
  },
});

export default styles;
