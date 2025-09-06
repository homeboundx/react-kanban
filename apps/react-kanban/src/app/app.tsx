import styled from 'styled-components';
import { Content } from '../components/Content';
import { Sidebar } from '../components/Sidebar';

const StyledApp = styled.div`
  display: flex;
`;

export function App() {
  return (
    <StyledApp>
      <Sidebar />
      <Content />
    </StyledApp>
  );
}

export default App;
