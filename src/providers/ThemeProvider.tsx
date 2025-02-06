import React, { createContext, useState, useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import themes from '../core/theme';

const { darkTheme, theme1, theme2, fire } = themes;

type ThemeType = typeof darkTheme;

interface ThemeContextType {
  currentTheme: ThemeType;
  setCurrentTheme: (theme: ThemeType) => void;
  themes: Record<string, ThemeType>;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: darkTheme,
  setCurrentTheme: ( theme : ThemeType) => {},
  themes: themes 
});

export const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(darkTheme);

  const value: ThemeContextType = {
    currentTheme,
    setCurrentTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      <PaperProvider theme={currentTheme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};