import styled from "styled-components";
import afterLogo from "./assets/after.webp";
import bg from "./assets/bg5.webp";

export const Container = styled.main`
  background: #a3d5f0 url(${bg}) no-repeat;
  height: 100vh;
  display: flex;
  padding: 1.5rem;
  background-size: cover;
  background-position: bottom;
  width: 100%;

  @media (max-width: 750px) {
    height: auto;
  }
`;
export const Content = styled.div`
  max-width: 800px;
  margin: auto;
  flex: 1;
  @media (max-width: 750px) {
    max-width: 500px;
  }
`;
export const FlexArea = styled.div`
  display: flex;

  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;
export const Info = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  background: #fef08a;
  max-width: 250px;
  align-items: flex-start;
  justify-content: space-around;
  border: 2px solid #713f12;
  flex: 1;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  &::after {
    content: "";
    display: inline-block;
    width: 40px;
    height: 58px;
    position: absolute;
    top: -58px;
    background: url(${afterLogo});
    transform: rotateY(180deg);
    right: 3px;
    z-index: 99;
    @media (max-width: 540px) {
      display: none;
    }
  }
  @media (max-width: 750px) {
    max-width: 100%;
    align-items: center;
  }
`;

export const LogoLink = styled.a`
  display: inline-block;
  margin-bottom: 1rem;
`;
export const Logo = styled.img`
  @media (max-width: 750px) {
    width: 250px;
    height: 94px;
  }
`;
export const InfoArea = styled.div`
  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding-bottom: 1rem;
    width: 100%;
  }
`;
export const GridArea = styled.div`
  flex: 1;
  display: flex;
  @media (max-width: 750px) {
    justify-content: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Score = styled.div`
  background-color: #713f12;
  text-align: center;
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
