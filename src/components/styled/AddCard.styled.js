import styled from "styled-components";

const StyledAddCard = styled.div`
  background-color: white;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  min-height: 30px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 2px solid gray;
  transition: ease-out 300ms;

  &:hover {
    background-color: #e5e5e5;
    cursor:pointer;
  }
`;
export default StyledAddCard;
