import React from "react";
import * as S from "./styles";
const Button = ({ label, onClick, icon }) => {
  return <S.Container onClick={onClick}>{label}</S.Container>;
};

export default Button;
