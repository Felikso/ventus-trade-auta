import styled from 'styled-components';
import { ContentBox } from "components/common"

export const GridInfoBox = styled.div`
`

export const SmallWidth = styled.div`
  width: 90%;
  margin: auto;  
`

export const GridBoxDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;



`

export const GridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;


    @media (min-width: ${({ theme }) => theme.device.s}) {

    }

    @media (min-width: ${({ theme }) => theme.device.xl}) {
      grid-template-columns: 1fr 2fr;
      width: 90%;
      margin: auto;
    }

    @media (min-width: ${({ theme }) => theme.device.xxl}) {
      grid-template-columns: 1fr;

    }
`

export const GridContentBox = styled(ContentBox)`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;

    @media (min-width: ${({ theme }) => theme.device.s}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme }) => theme.device.xl}) {
      grid-template-columns: 1fr 1fr 1fr;
/*       padding: 2em 5em; */
    }

    p{
      display: grid;
      grid-template-columns: 1fr 1fr 0.5fr;
      margin-left: 20px;
      @media (min-width: ${({ theme }) => theme.device.s}) {
        grid-template-columns: 1fr 1fr 1fr;
      }


    }

    li{
      list-style: none;
      margin-left: 20px;
    }

    span{
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary}
    }
`

export const ParametersBox = styled(ContentBox)`
    display: flex;
    flex-flow: wrap;
    grid-gap: 10px;
    background: ${({ theme }) => theme.colors.third};
    color: ${({ theme }) => theme.colors.secondary};
`

export const VinBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 90%;
    margin: 20px auto;

    span{
        color: ${({ theme }) => theme.colors.primary};
        font-size: 20px;
        font-weight: bold;
    }
`
export const ProductDetailsWrapper = styled.div`
    width: 100%;
    margin: 10px auto;

    @media (min-width: ${({ theme }) => theme.device.xxl}) {
      display: grid;
      grid-template-columns: 1fr 1.6fr;
    }

`