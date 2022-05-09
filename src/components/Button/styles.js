import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  border: 0;
  justify-content: center;
  text-align: right;
  padding: 1rem 1.5rem;
  color: #713f12;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  align-items: center;
  border: 2px solid #713f12;
  background: linear-gradient(180deg, #fef08a 0%, #fde047 100%);
  transition: all 0.2s;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

  &:hover {
    background: linear-gradient(180deg, #fef08a 0%, #ca8a04 100%);
  }
  @media (max-width: 820px) {
  }
`;
