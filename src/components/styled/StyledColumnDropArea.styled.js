import styled from "styled-components";
const StyledColumnDropArea = styled.div`
  height: 100%;
  ${({ isOver }) =>
    isOver &&
    `
  background-color: #dfece8;
  transition: ease-in 50ms;
  `}
`;
export default StyledColumnDropArea;
