import { StyleSheet } from 'react-native';
import { theme } from '../../core/theme';

export const COLORS = {
  cool: '#2196F3',
  warm: '#FF9800',
  background: theme.colors.background,
  text: theme.colors.text,
  subtext: theme.colors.text,
  border: '#E0E0E0',
};

export const styles = StyleSheet.create({
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
    borderColor: COLORS.border,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: COLORS.text,
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
    color: COLORS.subtext,
    fontWeight: '500',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  indicatorPanel: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    borderWidth: 2,
  },
  currentTempText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  diffText: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '500',
  },
  noDataText: {
    fontSize: 16,
    color: COLORS.subtext,
  }
});


