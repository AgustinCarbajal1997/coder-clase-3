import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./styles";
import THEME from "../../utils/themes";
import { AntDesign } from "@expo/vector-icons";
const Input = ({ onChangeText, value, mode, onPress }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, styles[mode]]}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        cursorColor={THEME.colors.mediumBlue}
        //secureTextEntry={true}
      />
      <TouchableWithoutFeedback onPress={onPress}>
        <AntDesign
          name="closecircleo"
          size={24}
          color={THEME.colors.mediumBlue}
          style={styles.inputButton}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Input;
