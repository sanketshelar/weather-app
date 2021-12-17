import styled from 'styled-components';
import Weather from './components/Weather';

function App() {
  return (
    <AppContainer>
      <Weather />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;
