import styled, { css } from 'styled-components';

const commonStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Container = styled.div`

  ${commonStyles}

  height: 100px;
  width: 100%;
  justify-content: space-between;
  background-color: #2E1D17;
`

export const Links = styled.div`

  ${commonStyles}

  padding: 0 90px;

  & :nth-child(n){
    text-transform: uppercase;
    margin: 0 40px;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover{
    transform: scale(1.3);
  }
  }

`

export const Menu = styled.div`

  ${commonStyles}

  justify-content: center;
  background-color: #EE4903;
  height: 100px;
  width: 100px;
`