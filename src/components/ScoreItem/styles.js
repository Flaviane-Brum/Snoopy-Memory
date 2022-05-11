import styled from "styled-components";
import { keyframes } from "styled-components";
const rotate2 = keyframes`
   0% {
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
`;
export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  background: hsl(52.8, 98.3%, 76.9%);
  align-items: center;
  border: 2px solid hsl(28.4, 72.5%, 25.7%);
  gap: 1rem;

  animation: ${rotate2} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  img {
    width: 150px;
    height: 200px;
  }
`;

export const ScoreTitle = styled.h1`
  color: hsl(28.4, 72.5%, 25.7%);
  line-height: 32px;
  font-size: 2rem;
  text-align: center;
`;
