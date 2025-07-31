import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  padding: 20px 0;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: 10px 15px;
  border: 2px solid ${({ $active }) => ($active ? "#3498db" : "#333333")};
  background: ${({ $active }) => ($active ? "rgba(52, 152, 219, 0.1)" : "rgba(20, 20, 20, 0.8)")};
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  min-width: 40px;

  &:hover {
    border-color: #3498db;
    background: rgba(52, 152, 219, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-color: #555555;
  }
`;