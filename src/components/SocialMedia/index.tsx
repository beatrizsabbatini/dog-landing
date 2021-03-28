import React from 'react';

import { Container, Rectangle, ItemContainer } from './styles';

const SocialMedia: React.FC = () => {

  const socialMediaItems = ["Twitter", "Instagram", "Facebook"];

  return (
    <Container>
    {socialMediaItems.map((item, index) => (
        <ItemContainer>
          <Rectangle/>
          <p key={index}>{item}</p>
        </ItemContainer>
    ))}
    </Container>
  )
}

export default SocialMedia;