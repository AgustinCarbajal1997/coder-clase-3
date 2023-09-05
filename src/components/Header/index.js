import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import THEME from "../../utils/themes";
const Header = ({ changeMode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AL MUNDO .com</Text>
      <View>
        <TouchableOpacity onPress={changeMode} activeOpacity={0.8}>
          <FontAwesome
            name="lightbulb-o"
            size={24}
            color={THEME.colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
