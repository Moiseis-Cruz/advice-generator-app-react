import './App.css';
import { createGlobalStyle } from 'styled-components';
import { Main } from './components/advice-generator';

function App() {
  return (
    <>
      <GlobalStyle />
      <Main/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border-box: box-sizing;
  }

  body {
    background-color: black;
  }

  img {
    width: 100%;
  }
`

export default App;
