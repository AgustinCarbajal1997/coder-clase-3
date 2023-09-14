import { StyleSheet } from "react-native";
import THEME from "../../utils/themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.colors.white,
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
  buttonContainer: {
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: THEME.colors.darkBlue,
    borderRadius: 15,
  },
  buttonText: {
    color: THEME.colors.white,
    fontSize: 15,
    fontFamily: THEME.fontFamily.josefinBold,
  },
});

export default styles;
