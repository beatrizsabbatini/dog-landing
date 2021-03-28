import styled, { css } from 'styled-components';

const commonStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`

  ${commonStyles}

  justify-content: flex-end;
  background-color: #FFF;
  height: calc(100vh - 100px);
  min-width: 100px;

  p{
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    color: black;
    margin: 10px 0;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 14px;
    cursor: pointer;
  }
`

export const Rectangle = styled.div`
  height: 25px;
  width: 2px;
  background-color: black;
`

export const ItemContainer = styled.div`
 
  ${commonStyles}

  justify-content: center;
  margin: 20px 0;
  
`