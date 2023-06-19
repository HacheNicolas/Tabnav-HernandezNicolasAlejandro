import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { Input, Items, CustomModal } from '../../components/index';
import { STOCK } from '../../constants';

const Stock = ({}) => {
  const [text, setText] = useState('');
  const [items, setItems] = useState(STOCK);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onAddItem = () => {
    if (text.length === 0) return;
    setItems([
      ...items,
      {
        id: Math.random().toString(),
        name: text,
      },
    ]);
    setText('');
  };

  const onHandlerItem = (id) => {
    setModalVisible(!modalVisible);
    const selectedItem = items.find((item) => item.id === id);
    setSelectedItem(selectedItem);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedItem(null);
  };

  const onHandlerDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          buttonColor="#1F8378"
          buttonTitle="Agregar"
          onChangeText={(text) => setText(text)}
          onHandlerButton={onAddItem}
          placeholder="Ingrese un alimento"
          name={text}
        />
      </View>
      <View style={styles.listContainer}>
        <Items items={items} onSelectItem={onHandlerItem} />
      </View>
      <CustomModal
        isVisible={modalVisible}
        animationType="slide"
        onCancel={onHandlerCancelModal}
        onDelete={onHandlerDeleteItem}
        selectedItem={selectedItem}
      />
    </SafeAreaView>
  );
};

export default Stock;
