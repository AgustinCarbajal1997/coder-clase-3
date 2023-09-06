import { View, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import THEME from "../../utils/themes";

const Input = ({ onChangeText, value, mode }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, styles[mode]]}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        cursorColor={THEME.colors.mediumBlue}
        //secureTextEntry={true}
      />
    </View>
  );
};

export default Input;
