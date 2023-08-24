import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const Button = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Agregar</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
