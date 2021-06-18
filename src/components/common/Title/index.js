import styled from 'styled-components';

export const Title = styled.div`

/*   background: ${({ theme }) => theme.colors.primary}; */
  width: 100%;
/*   padding: 20px 0; */

  h4{
    text-transform: capitalize;
    display: inline-block;
/*     width: min-content; */
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0 20px;
    font-size: 28px; 

    &::after {
        content: "";
        display: block;
        width: 100%;
        padding-top: 4px;
        border-bottom: 8px solid ${({ theme }) => theme.colors.secondary}; 
      }

      ${({ secondary, theme }) =>
    secondary &&
    `
    color: ${theme.colors.primary}; 
    
    &::after {
        border-bottom: 8px solid ${theme.colors.third}; 
      }
	`}

  }
 


`;
