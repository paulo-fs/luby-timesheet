import { Provider } from 'react-redux';
import store from '@/shared/store/store';

import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/shared/styles/theme/defaultTheme';
import { GlobalStyle } from '@/shared/styles/global';

import { Background } from '@/components';
import { Routes } from '@/shared/routes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Background>
          <Routes />
          <GlobalStyle />
        </Background>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
