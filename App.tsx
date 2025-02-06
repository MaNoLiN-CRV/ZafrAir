import React from 'react';
import type {PropsWithChildren} from 'react';
import Navigation from './src/screens/BottomTab';
import { ThemeProvider } from './src/providers/ThemeProvider';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
   <ThemeProvider>
      <Navigation/>
  </ThemeProvider>
  );
}

export default App;
