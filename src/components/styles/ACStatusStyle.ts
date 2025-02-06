import { StyleSheet } from 'react-native';


export const createStyles = (theme : any) => StyleSheet.create({

  container: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 16,
    padding: 16,
    margin: 12,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: 'row',
    gap: 16,
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsPanel: {
    backgroundColor: theme.colors.background,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: theme.colors.text,
  },
  statsContent: {
    flexDirection: 'column',
    overflow: 'hidden',
    gap: 8,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: theme.colors.text,
    fontWeight: '500',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
  },
  indicatorPanel: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    borderWidth: 2,
    borderColor: theme.colors.border,
  },
  currentTempText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  diffText: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '500',
    color: theme.colors.text,
  },
  noDataText: {
    fontSize: 16,
    color: theme.colors.subtext,
  }
});

