import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { OrderItems } from '../../components';
import { ORDERS } from '../../constants';

const Orders = ({ navigation }) => {
  const donations = ORDERS.filter((order) => order.orderType == 'Donacion');
  const requests = ORDERS.filter((order) => order.orderType == 'Solicitud');

  const onSelectDonation = (items) => {
    navigation.navigate('OrdersDetailed', {
      name: 'DONACIONES',
      ordersDetailedItems: items,
      orderType: 'Donaciones',
    });
  };

  const onSelectRequests = (items) => {
    navigation.navigate('OrdersDetailed', {
      name: 'SOLICITUDES',
      ordersDetailedItems: items,
      orderType: 'Solicitudes',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <OrderItems
          items={donations}
          preview={true}
          title={'Donaciones'}
          onSelectList={onSelectDonation}
        />
      </View>
      <View style={styles.sectionContainer}>
        <OrderItems
          items={requests}
          preview={true}
          title={'Solicitudes'}
          onSelectList={onSelectRequests}
        />
      </View>
    </SafeAreaView>
  );
};

export default Orders;
