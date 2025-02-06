import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../providers/ThemeProvider';

const ThemeSettingsScreen = () => {
  const { currentTheme, setCurrentTheme, themes } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.colors.background }]}>
      <Text style={[styles.title, { color: currentTheme.colors.text }]}>
        Theme Settings
      </Text>
      <View style={styles.themeContainer}>
        {Object.entries(themes).map(([key, theme]) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.themeButton,
              {
                backgroundColor: theme.colors.primary,
                borderColor: currentTheme === theme ? theme.colors.secondary : 'transparent',
                borderWidth: 3,
              },
            ]}
            onPress={() => setCurrentTheme(theme)}
          >
            <Text
              style={[
                styles.themeButtonText,
                { color: theme.colors.text }
              ]}
            >
              {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  themeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  themeButton: {
    padding: 15,
    borderRadius: 10,
    minWidth: 100,
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  themeButtonText: {
    fontWeight: 'bold',
  },
});

export default ThemeSettingsScreen;