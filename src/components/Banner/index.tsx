import React from 'react';

import Button from '../Button';
import { 
  Container, 
  Title, 
  TitlePrefix, 
  TextContents, 
  ImageContainer,
  Text 
} from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <TextContents>
        <TitlePrefix>Black</TitlePrefix>
        <Title>Labrador</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis enim, mattis ac 
          laoreet eget, facilisis et lorem. Quisque tincidunt massa eros, id tempus felis vulputate sed.
        </Text>
        <Button/>
      </TextContents>
      <ImageContainer/>
    </Container>
  )
}

export default Banner;