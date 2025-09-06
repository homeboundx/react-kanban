import styled from 'styled-components';
import { Controls } from './header/Controls';
import { CurrentBoardName } from './header/CurrentBoardName';

const StyledHeader = styled.header`
  display: flex,
  height: 60px,
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <CurrentBoardName />
        <Controls />
      </div>
      <div>
        <button>add a new todo</button>
        <button>...</button>
      </div>
    </StyledHeader>
  );
};
