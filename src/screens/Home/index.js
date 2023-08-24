import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerAddItem}>
        <Input />
        <Button />
      </View>
    </View>
  );
};

export default Home;
