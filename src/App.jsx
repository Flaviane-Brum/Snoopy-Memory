import { useEffect, useState } from "react";
import * as S from "./App.styles";
import LogoImage from "./assets/logo.webp";
import relogio from "./assets/relogio.svg";
import repeat from "./assets/running2.webp";
import Button from "./components/Button";
import { Items } from "./data/Items";
import { formatTime } from "./helpers/formatTime";
import InfoItem from "./components/InfoItem";
import GridItem from "./components/GridItem";
import ScoreItem from "./components/ScoreItem";
function App() {
  const [playing, setPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [showCount, setShowCount] = useState(0);
  const [gridItems, setIGridItems] = useState([]);
  const [hits, setHits] = useState(0);
  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);
  useEffect(() => {
    if (showCount === 2) {
      let opened = gridItems.filter((item) => item.shown === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems];
          setHits(hits + 1);
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setIGridItems(tmpGrid);
          setShowCount(0);
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for (const i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setIGridItems(tmpGrid);
            setShowCount(0);
          }, 1000);
        }

        setMoveCount((moveCount) => moveCount + 1);
      }
    }
  }, [hits, gridItems, showCount]);
  useEffect(() => {
    if (
      moveCount > 0 &&
      gridItems.every((item) => item.permanentShown === true)
    ) {
      setPlaying(false);
    }
  }, [gridItems, moveCount]);
  const resetAndCreateGrid = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);
    setHits(0);
    let tmpGrid = [];
    for (let i = 0; i < Items.length * 2; i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    }
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < Items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (Items.length * 2));
        }
        tmpGrid[pos].item = i;
      }
    }
    setIGridItems(tmpGrid);
    setPlaying(true);
  };
  const handleItemClick = (index) => {
    if (playing && index !== null && showCount < 2) {
      let tmpGrid = [...gridItems];
      if (
        tmpGrid[index].permanentShown === false &&
        tmpGrid[index].shown === false
      ) {
        tmpGrid[index].shown = true;
        setShowCount(showCount + 1);
      }
      setIGridItems(tmpGrid);
    }
  };
  return (
    <S.Container>
      <S.Content>
        <S.LogoLink href="/">
          <S.Logo
            src={LogoImage}
            width={300}
            height={113}
            alt="Snoopy Memory"
          />
        </S.LogoLink>
        <S.FlexArea>
          <S.GridArea>
            {gridItems.every((item) => item.permanentShown === true) ? (
              <ScoreItem />
            ) : (
              <S.Grid>
                {gridItems.map((item, index) => (
                  <GridItem
                    key={index}
                    item={item}
                    onClick={() => handleItemClick(index)}
                  />
                ))}
              </S.Grid>
            )}
          </S.GridArea>
          <S.Info>
            <S.InfoArea>
              <InfoItem
                icon={relogio}
                labelInfo={formatTime(timeElapsed)}
                small="Tempo"
                alt="Icone de um relógio"
              />
              <InfoItem
                icon={repeat}
                labelInfo={moveCount}
                small="Movimentos"
                alt="Icone do Snoopy correndo."
              />
            </S.InfoArea>
            <Button label="Reiniciar" onClick={resetAndCreateGrid} />
          </S.Info>
        </S.FlexArea>
      </S.Content>
    </S.Container>
  );
}

export default App;
