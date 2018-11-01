import React from 'react';
import styled from 'styled-components';

const RoundedButton = styled.button`
  width: 15px;
  height: 15px;
  min-width: 15px;
  background-color: rgba(84, 163, 255, 1);
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 100%;
  border: none;
  text-align: center;
  align-items: center;
  padding: 0;
  margin: 4px;
  cursor: pointer;
  outline: none;
  
  &:hover {
    transform: scale3d(1.3, 1.3, 1.3);
  }
`;

export default RoundedButton;