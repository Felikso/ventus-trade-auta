import styled from 'styled-components';

export const ContactIconContainer = styled.div`
    width: 80px;
    height: 120px;

    @media (min-width: ${({ theme }) => theme.device.m}) {
        width: 150px;
        height: 200px;
      }

`
export const ContactIconBox = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color:  ${({ theme }) => theme.colors.third};
    background:  ${({ theme }) => theme.colors.secondary};

    @media (min-width: ${({ theme }) => theme.device.m}) {
        font-size: 120px;
      }
`

export const ContactIconInfo = styled.div`
    width: 100%;
    height: 25%;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.primary}; 
    color:  ${({ theme }) => theme.colors.third};
`