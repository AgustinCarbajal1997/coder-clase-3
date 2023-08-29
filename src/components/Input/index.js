import { View, TextInput } from "react-native";
import React from "react";
import styles from "./styles";

const Input = ({ onChangeText, value }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        //secureTextEntry={true}
      />
    </View>
  );
};

export default Input;
