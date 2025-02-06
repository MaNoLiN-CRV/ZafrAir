import { StyleSheet } from 'react-native';
import { CARD_HEIGHT } from '../VerticalCards';

export const createStyles = (theme : any) => StyleSheet.create({
  cardContainer: {
    height: CARD_HEIGHT,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    margin: 20,
    filter: `drop-shadow(0 2 10px ${theme.colors.shadow})`,
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
    color: theme.colors.text,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: theme.colors.text,
    opacity: 0.8,
  },
  contentContainerStyle: {
    paddingVertical: 20,
  },
});
