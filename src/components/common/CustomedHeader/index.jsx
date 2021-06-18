import React from "react"

import BgImg from './BgImg'
import { SimplyHeader, HeroTextBox } from './styles.js'

export function CustomedHeader({
  backgroundImage,
  afterOpacity,
  image,
  headerBg,
  children,
  bgImage,
  HeroHeight,
  HeroWidthMedia,
  HeroHeightMedia,
  HeroBrandName,
  HeroSubName }) {
  return (
    <SimplyHeader
      css={`
          background: ${headerBg};
          `}
    >
      <BgImg
        backgroundImage={backgroundImage}
        headerBg={headerBg}
        afterOpacity={afterOpacity}
        HeroHeight={HeroHeight}
        HeroWidthMedia={HeroWidthMedia}
        HeroHeightMedia={HeroHeightMedia}
      >
        <HeroTextBox>
          <h2>{HeroBrandName}</h2>
          <h3>{HeroSubName}</h3>
        </HeroTextBox>
        {children}
      </BgImg>

    </SimplyHeader>
  )
}


/* const SimplyHeader = styled.header`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
 */
//this component inherits all of the styles from the styled component passed in, other than the changed contained
/* const CustomHeader = styled(SimplyHeader)`
  min-height: 60vh;
` */
//setting up default prop, in case image (or something else) is not passed in
/* CustomedHeader.defaultProps = {
  image: image,
}
CustomHeader.defaultProps = {
  image: image,
}
 */