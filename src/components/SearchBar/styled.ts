import styled from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #333333;
  border-radius: 10px;
  background: rgba(20, 20, 20, 0.8);
  color: #ffffff;
  font-size: 16px;
  transition: all 0.3s ease;

  &::placeholder {
    color: #666666;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
`;

export const ClearText = styled.span`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  color: #666666;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s ease;
  pointer-events: auto;

  &:hover {
    color: #ffffff;
  }
`;
