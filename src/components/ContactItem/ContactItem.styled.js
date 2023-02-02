import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  margin-left: 7px;
  cursor: pointer;
  border: none;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(107, 46, 6, 0.5);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  background-color: #a78b80;
  margin-left: auto;
  :hover {
    background-color: #73372a;
    transform: scale(1.05);
  }
  }
`;
