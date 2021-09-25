import React, { useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Routes from './Components/Routes';
import { default as theme } from './theme.json'; // <-- app theme
import SplashScreen from 'react-native-splash-screen';

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Routes />
      </ApplicationProvider>
    </>
  )

}

export default App
