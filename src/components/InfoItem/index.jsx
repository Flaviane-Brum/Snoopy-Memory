import React from "react";
import * as S from "./styles";
const InfoItem = ({ icon, labelInfo, small, alt }) => {
  return (
    <S.Container>
      <S.Small>{small}</S.Small>
      <S.LabelInfo>
        <S.Img src={icon} width={60} height={60} alt={alt} />
        {labelInfo}
      </S.LabelInfo>
    </S.Container>
  );
};

export default InfoItem;
