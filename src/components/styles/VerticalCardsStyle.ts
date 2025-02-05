import { StyleSheet } from 'react-native';
import { CARD_HEIGHT } from '../VerticalCards';


export const styles = StyleSheet.create({
  cardContainer: {
    height: CARD_HEIGHT,
    borderRadius: 20,

    overflow: 'hidden',
    backgroundColor: 'transparent',
    margin: 20,
    filter: `drop-shadow(0 2 10px black)`,
  },
  gradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  contentContainer: {},
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  contentContainerStyle: {
    paddingVertical: 20,
  },
});
