import React from "react"
import { BgImage } from 'gbimage-bridge';

import styled from 'styled-components'

const BgImg = ({ backgroundImage, children, HeroHeight, HeroWidthMedia, HeroHeightMedia }) => {


  return (
    <StyledBgImg
      image={backgroundImage}
      css={`
          height: ${HeroHeight};
          @media screen and (max-width: 768px) {
              height: ${HeroWidthMedia}; 
            } 
            @media screen and (max-height: 500px) {
              height: ${HeroHeightMedia}; 
          }
            `}
    >
      {children}
    </StyledBgImg>
  );
};

export default BgImg

const StyledBgImg = styled(BgImage)`
    width: 100%;
`