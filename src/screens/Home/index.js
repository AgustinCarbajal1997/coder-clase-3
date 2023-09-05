import { View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import List from "../../components/List";
import Modal from "../../components/ModalConfirmation";
import Header from "../../components/Header";

const Home = () => {
  const [input, setInput] = useState("");
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [mode, setMode] = useState("lightmode");

  const addNewPlace = () => {
    if (input === "") return;
    setPlaces([...places, { name: input, id: Date.now() }]);
    setInput("");
  };

  const onConfirmDeletion = (id) => {
    const filteredPlaces = places.filter((item) => item.id !== id);
    setPlaces(filteredPlaces);
    setModalVisible(false);
    setSelectedPlace(null);
  };

  const selectPlace = (item) => {
    setSelectedPlace(item);
    setModalVisible(true);
  };

  const changeMode = () => {
    setMode(mode === "lightmode" ? "darkmode" : "lightmode");
  };

  return (
    <View style={[styles.container, styles[mode]]}>
      <View>
        <Header mode={mode} changeMode={changeMode} />
      </View>
      <View style={styles.containerAddItem}>
        <Input onChangeText={setInput} value={input} mode={mode} />
        <Button onPress={addNewPlace} />
      </View>
      <View>
        <List data={places} selectPlace={selectPlace} />
      </View>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedPlace={selectedPlace}
        onConfirmDeletion={onConfirmDeletion}
      />
    </View>
  );
};

export default Home;
