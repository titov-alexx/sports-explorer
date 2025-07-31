import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  min-width: 200px;
  font-size: 16px;
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 15px 40px 15px 20px;
  background: rgba(20, 20, 20, 0.8);
  color: #fff;
  border: 2px solid #333;
  border-radius: 10px;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s;
  position: relative;
  outline: none;
  font-size: inherit;
  &:hover,
  &:focus {
    border-color: #3498db;
  }
`;

export const Arrow = styled.span<{ $isOpen: boolean }>`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%) rotate(${({ $isOpen }) => ($isOpen ? 180 : 0)}deg);
  pointer-events: none;
  font-size: 0.9em;
  color: #fff;
  transition: transform 0.2s ease;
`;

export const DropdownList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background: #181818;
  border: 2px solid #333;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  z-index: 100;
  max-height: 220px;
  overflow-y: auto;
  list-style: none;
  scrollbar-width: thin;
  scrollbar-color: #3498db #2c3e50;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #2c3e50;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #3498db;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #2980b9;
  }
`;

export const DropdownItem = styled.li<{ selected: boolean }>`
  padding: 14px 20px;
  color: #fff;
  background: ${({ selected }) => (selected ? "#23272f" : "transparent")};
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #23272f;
  }
`;
