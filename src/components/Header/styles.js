import { StyleSheet } from "react-native";
import THEME from "../../utils/themes";

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.darkBlue,
    marginTop: 50,
    paddingTop: 20,
    flexDirection: "column",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
  },
  text: {
    color: THEME.colors.orange,
    fontSize: THEME.fontSize.heading,
    fontFamily: THEME.fontFamily.josefinBold,
    textAlign: "center",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: THEME.colors.mediumBlue,
    paddingVertical: 10,
  },
  buttonMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textMenu: {
    paddingHorizontal: 10,
    fontFamily: THEME.fontFamily.josefinBold,
    fontSize: THEME.fontSize.subheading,
    color: THEME.colors.white,
  },
  textMenuFocused: {
    color: THEME.colors.orange,
  },
});

export default styles;
