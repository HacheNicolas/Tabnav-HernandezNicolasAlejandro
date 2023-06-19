import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { OrderItems } from '../../components';

const OrdersDetailed = ({ route }) => {
  const { ordersDetailedItems, orderType } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <OrderItems items={ordersDetailedItems} preview={false} title={orderType} />
      </View>
    </SafeAreaView>
  );
};

export default OrdersDetailed;
