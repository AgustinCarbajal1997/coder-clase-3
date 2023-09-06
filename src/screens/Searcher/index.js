import { View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import List from "../../components/List";
import Modal from "../../components/ModalConfirmation";
import DATA from "../../data";

const Searcher = ({ mode }) => {
  const [input, setInput] = useState("");
  const [places, setPlaces] = useState(DATA);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <View style={[styles.container, styles[mode]]}>
      <View style={styles.containerAddItem}>
        <Input onChangeText={setInput} value={input} mode={mode} />
        <Button onPress={searchPlace} />
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

export default Searcher;
