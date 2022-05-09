import React from "react";
import * as S from "./styles";
import snoopy from "../../assets/happy2.webp";
const ScoreItem = () => {
  return (
    <S.Container>
      <S.ScoreTitle>Parabéns, você conseguiu!!</S.ScoreTitle>
      <img src={snoopy} alt="" />
    </S.Container>
  );
};

export default ScoreItem;
