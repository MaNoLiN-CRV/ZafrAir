import React from 'react';
import type {PropsWithChildren} from 'react';


import Navigation from './src/screens/BottomTab';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
      <Navigation/>
  );
}

export default App;
