import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  background-color: #EE4903;
  box-shadow: 0 0 50px -5px rgba(238,73,3,0.73);
  width: fit-content;
  margin-top: 50px;
  cursor: pointer;
  transition: 1s ease;

  p{
    padding: 15px 50px;
  }

  &:hover{
    transform: scale(1.3);
  }
`