import styled from 'styled-components';
import { ThemeSwitcher } from './sidebar/ThemeSwitcher';

const StyledAside = styled.aside`
  background: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 20px;
  transition: all 0.3s ease;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export const Sidebar = () => {
  return (
    <StyledAside>
      <div>
        <div>Logo</div>
        <div>All boards</div>
      </div>
      <div>
        <ThemeSwitcher />
        <div> hide sidebar toggle</div>
      </div>
    </StyledAside>
  );
};
