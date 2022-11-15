import styled from "styled-components";

const StyledItemCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  padding: 10px;
  min-height: 100px;
  border-radius: 10px;
  border: 2px solid black;
  margin-bottom: 10px;
  transition: ease-out 300ms;
  h3{
  margin-top:5px;
  }
  ${({ isDragging }) =>
    isDragging &&
    `
  opacity:0;
  `}
  &:hover {
    background-color: #85ccae;
  }
`;
export default StyledItemCard;
