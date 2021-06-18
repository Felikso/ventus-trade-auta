import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

export const ProductsWrapper = styled.div`
    display: grid;
    background: ${({ theme }) => theme.colors.third};
    justify-content: center;
    grid-gap: 50px;
    padding: 30px;

    @media (min-width: ${({ theme }) => theme.device.m}) {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: ${({ theme }) => theme.device.xxl}) {
      flex-direction: row;
      flex-flow: wrap;
    }
`

