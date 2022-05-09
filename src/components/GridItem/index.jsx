import React from "react";
import * as S from "./styles";
import Icon from "../../assets/point.svg";
import { Items } from "../../data/Items";
const GridItem = ({ item, onClick }) => {
  return (
    <S.Container
      onClick={onClick}
      showBackground={item.permanentShown || item.shown}
    >
      {item.permanentShown === false && item.shown === false && (
        <S.IconPrimary src={Icon} alt="" />
      )}
      {(item.permanentShown || item.shown) && item.item !== null && (
        <S.Icon src={Items[item.item].icon} />
      )}
    </S.Container>
  );
};

export default GridItem;
