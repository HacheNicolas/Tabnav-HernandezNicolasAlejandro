import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'space-around',
  },
  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
