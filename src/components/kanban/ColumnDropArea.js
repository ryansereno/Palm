import React from "react";
import StyledColumnDropArea from "../styled/StyledColumnDropArea.styled";

const Col = ({ isOver, children }) => {
  return (
    <StyledColumnDropArea isOver={isOver}> {children}</StyledColumnDropArea>
  ); //isOver is a custom param sent to the CSS logic within the styled component
};

export default Col;
