import styled from "styled-components";

export const BadgeContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const BadgeImage = styled.img`
  max-width: 130px;
  max-height: 130px;
  object-fit: contain;
`;

export const BadgePlaceholder = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(52, 152, 219, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  font-size: 20px;
`;

export const BadgeContainerWithBackground = styled(BadgeContainer)`
  background: rgba(52, 152, 219, 0.1);
  border: 1px solid rgba(52, 152, 219, 0.3);
`;