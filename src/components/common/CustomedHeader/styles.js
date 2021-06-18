import styled from "styled-components"
import { BgImage } from 'gbimage-bridge';

export const SimplyHeader = styled.header`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CustomHeader = styled(SimplyHeader)`
  min-height: 60vh;
`

export const StyledBgImg = styled(BgImage)`
width: 100%;
`

export const HeroTextBox = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-10%, 0);
  h2{
    color: white;
    font-size: 18px;
    }
  

  h3{
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    }
  

  @media (min-width: ${({ theme }) => theme.device.m}) {
    transform: translate(-50%, -50%);

    h2{
      font-size: 20px;
      }
    
  
    h3{
      font-size: 16px;
      }
  }
`

