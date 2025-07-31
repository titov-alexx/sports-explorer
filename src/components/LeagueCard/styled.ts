import styled from "styled-components";

export const LeagueCardContainer = styled.div`
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid #333333;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 120px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    border-color: #3498db;
  }
`;

export const LeagueInfo = styled.div`
  flex: 1;
`;

export const LeagueName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #ecf0f1;
`;

export const LeagueSport = styled.p`
  font-size: 0.9rem;
  color: #bdc3c7;
  margin: 0 0 5px 0;
  text-transform: capitalize;
`;

export const LeagueAlternate = styled.p`
  font-size: 0.8rem;
  color: #95a5a6;
  margin: 0;
  font-style: italic;
`;