import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
   0% {
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
`;

const rotate2 = keyframes`
   0% {
    -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
  }
  100% {
    -webkit-transform: rotateY(-360deg);
            transform: rotateY(-360deg);
  }
`;
export const Container = styled.div`
  animation: ${(props) => (props.showBackground ? rotate : rotate2)} 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  background: ${(props) =>
    props.showBackground
      ? "#DC2626"
      : "linear-gradient(180deg, #fef08a 0%, #fde047 100%)"};
  height: 100px;
  border: 2px solid #713f12;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
`;
export const IconPrimary = styled.img`
  width: 40px;
  height: 40px;
`;
