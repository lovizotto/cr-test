import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  position: relative;
  border-radius: 3px;
  border-style: none;
  background-color: #54A3FF;
  color: white;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  outline: none;
  
  transition: box-shadow .2s, background-color .2s;
  
  &:focus, &:active {
    box-shadow: 0 0 6px rgba(84, 163, 255, 1);
    background-color: rgb(104,175,255);
  }
`;

export default Button;