import styled, { createGlobalStyle } from 'styled-components';
import { Content } from '../components/Content';
import { Sidebar } from '../components/Sidebar';
import { StyledThemeWrapper } from '../components/StyledThemeWrapper';
import { AppThemeProvider } from '../providers/ThemeProvider';

const GlobalStyle = createGlobalStyle`
 h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-size: inherit;
  }`;

const StyledApp = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppThemeProvider>
        <StyledThemeWrapper>
          <StyledApp>
            <Sidebar />
            <Content />
          </StyledApp>
        </StyledThemeWrapper>
      </AppThemeProvider>
    </>
  );
}

export default App;
