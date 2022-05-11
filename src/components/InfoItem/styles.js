import styled from "styled-components";

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;
export const Small = styled.small`
  display: block;
  color: hsl(35.5, 91.7%, 32.9%);
  font-weight: 500;
`;
export const LabelInfo = styled.span`
  display: flex;
  font-size: 36px;
  color: hsl(28.4, 72.5%, 25.7%);
  margin-bottom: 1rem;
  gap: 0.5rem;
  @media (max-width: 750px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;
export const Img = styled.img`
  height: 60px;
  width: 60px;
`;
