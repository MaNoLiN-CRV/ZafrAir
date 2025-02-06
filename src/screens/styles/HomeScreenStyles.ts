import { StyleSheet } from 'react-native';

export const createStyles = (theme : any) => StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    filter: `drop-shadow(0 0 10px ${theme.colors.shadow})`,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    filter: `drop-shadow(0 0 10px ${theme.colors.shadow})`,
  },
  runningACsContainer: {
    paddingVertical: 10,
  },
  runningAC: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: theme.colors.surface,
    borderRadius: 10,
    marginHorizontal: 5,
    color: theme.colors.primary,
  },
});
