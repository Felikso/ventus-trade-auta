import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const ProductCardContainer = styled.div`
    width: 290px;
    height: 400px;
    position: relative;

    @media (min-width: ${({ theme }) => theme.device.m}) {
        margin: 20px 100px;
        width: 320px;
    }
`
export const ProductCardIconsContainer = styled.div`
    width: 260px;
    height: 300px;
    background: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    bottom: 0;
`

export const ProductCardPhoto = styled(BackgroundImage)`
    width: 260px;
    height: 300px;
    position: absolute;
    top: 0;
`
export const ProductCardIcons = styled.div`
    background: yellow;
    position: absolute:
    bottom: 0;
    left: 0;
    width: 270px;
    height: 380px;
`
export const ProductCardIconsBox = styled.div`
    height: 80px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
`

export const ProductIcon = styled.div`
    height: 100%;
    width: 50px;
    background: yellow;

`