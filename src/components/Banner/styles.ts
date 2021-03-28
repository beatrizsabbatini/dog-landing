import styled from 'styled-components';
import DogImage from '../../assets/dog.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: calc(100vh - 100px);
  width: 100%;

  img{
    z-index: -1;
    height: 140%;
  }
`

export const Title = styled.h1`
  letter-spacing: 18px;
  font-family: 'Roboto';
  font-size: 140px;
  text-transform: uppercase;
`

export const TitlePrefix = styled.h1`
  letter-spacing: 70px;
  font-size: 28px;
  text-transform: uppercase;
`

export const Text = styled.p`
  line-height: 45px;
  text-align: justify;
`

export const TextContents = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45vw;
    padding: 100px;
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${DogImage});
  background-size: calc(100vh - 120px);
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  margin-left: -250px;
`