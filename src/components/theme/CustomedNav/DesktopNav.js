import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"


import AnchorLink from 'react-anchor-link-smooth-scroll';

import { StyledMobileLogo, LogoBox, StyledHeader } from "./styles"
import Toggler from './Toggler';

const DesktopNavMenu = ({ links }) => {
  const [background, setBackground] = useState(false)
  const navRef = useRef()

  let passiveIfSupported = false;

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll, passiveIfSupported)

    return () => {
      document.removeEventListener("scroll", handleScroll, passiveIfSupported)
    }
  }, [])

  return (
    <StyledHeader background={background}>
      <ul>
        <li>
          <LogoBox to="/">
            <StyledMobileLogo /><h2>ventus trade</h2>
          </LogoBox>

        </li>
        {
          links.map(link => {
            return (
              <>
                {
                  link.scrollId && (
                    <li><AnchorLink href={link.scrollId}>{link.name}</AnchorLink></li>
                  )}

                {
                  link.path && (
                    <li><Link href={link.path}>{link.name}</Link></li>
                  )}

              </>
            )
          })
        }
        <Toggler />
      </ul>
    </StyledHeader>
  )
}

export default DesktopNavMenu
