import { Link } from "gatsby"
import styled from 'styled-components';

import { ReactComponent as Logo } from 'assets/illustrations/vt-logo.svg'

export const MediaBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    display: grid;
    background: ${({ theme }) => theme.colors.third};
/*     grid-template-columns: 1fr 4px 1.5fr; */
    grid-template-columns: 1fr 1.5fr;
  }
`

export const FooterLogo = styled(Logo)`
  fill: ${({ theme }) => theme.colors.third};
  height: 40px;

`

export const FooterWrapper = styled.footer`
/*   background: ${({ theme }) => theme.colors.secondary}; */
display: flex;
flex-direction: column;
`

export const FooterBrandNameBox = styled.div`
  
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.third};
  font-size: 40px;
  text-transform: capitalize;
  text-align: center;
  padding: ${({ theme }) => theme.padding.m}; 
  display: flex;
  justify-content: center;
  align-items: center;

  h3{
    margin: 0;
  }

  svg{
    fill: ${({ theme }) => theme.colors.secondary};
  }
`

export const FooterLocationBox = styled.div`
  
  color: ${({ theme }) => theme.colors.third};
  background: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  padding: ${({ theme }) => theme.padding.m}; 

  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const LocationData = styled.div`
  color: ${({ theme }) => theme.colors.third};
  font-weight: bold;
  padding: 20px 0;
  display: grid;
  grid-gap: 10px;
  justify-content: flex-end;
  text-align: right;

  h3 {
    font-size: 16px;
    margin: 0;
  }

  h4 {
    font-size: 14px;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.third};
    font-size: 20px;
  }
`

export const LocationMap = styled.div`
  color: ${({ theme }) => theme.colors.third};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 100px;

  p{
    font-size: 24px;
  }
`

export const ToggleableBg = styled(Logo)`
  fill: ${({ theme }) => theme.colors.thirdLight};
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
`

export const FooterSectionsBox = styled.div`
  
  color: ${({ theme }) => theme.colors.third};
  background-color: ${({ theme }) => theme.colors.secondary};  
  position: relative;
  padding: ${({ theme }) => theme.padding.m}; 
  line-height: 2em;



  h5{
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
  }

  a{
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const FooterIconsBox = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary}; 

`

export const FooterIcon = styled.a`
      color: ${({ theme }) => theme.colors.footerIcon}; 
      font-size: ${({ theme }) => theme.fontSize.footerIcon}; 
      transition: ${({ theme }) => theme.transitions.transDefault}; 
      margin: 10px;

      &:hover{
        color: ${({ theme }) => theme.colors.footerIconHover}; 
         /*  filter: brightness(0.6); */
      }
`

export const FooterInfo = styled(Link)`
    color: ${({ theme }) => theme.colors.third}; 
    text-decoration: none;
    margin: .3em;
    transition: ${({ theme }) => theme.transitions.transDefault}; 
    &:hover{
      /* color: ${({ theme }) => theme.colors.secondary}; */
      filter: brightness(0.6);
    }
`

export const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.footerInfo}; 
  background: ${({ theme }) => theme.colors.secondary}; 
`


