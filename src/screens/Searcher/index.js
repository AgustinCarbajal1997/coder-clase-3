import { View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import List from "../../components/List";
import DATA from "../../data";

const Searcher = ({ mode }) => {
  const [input, setInput] = useState("");
  const [places, setPlaces] = useState(DATA);

  const searchPlace = () => {
    if (input === "") {
      setPlaces(DATA);
      return;
    }
    const filterPlaces = DATA.filter((item) =>
      item?.name?.toLowerCase().includes(input.toLowerCase())
    );
    setPlaces(filterPlaces);
  };

  const onCleanInput = () => {
    setInput("");
    setPlaces(DATA);
  };

  return (
    <View style={[styles.container, styles[mode]]}>
      <View style={styles.containerAddItem}>
        <Input
          onChangeText={setInput}
          value={input}
          mode={mode}
          onPress={onCleanInput}
        />
        <Button onPress={searchPlace} />
      </View>
      <View>
        <List data={places} />
      </View>
    </View>
  );
};

export default Searcher;
