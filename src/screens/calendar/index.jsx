import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import EventItems from '../../components/items/event';
import { EVENTS } from '../../constants';

const Calendar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EventItems items={EVENTS} />
    </SafeAreaView>
  );
};

export default Calendar;
