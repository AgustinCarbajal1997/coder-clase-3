import { StyleSheet } from "react-native";
import THEME from "../../utils/themes";

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: THEME.colors.lightpink,
    backgroundColor: THEME.colors.lightpink,
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  itemText: {
    color: THEME.colors.black,
    fontSize: THEME.fontSize.subheading,
    fontWeight: THEME.fontWeight.mainRegular,
  },
});

export default styles;
