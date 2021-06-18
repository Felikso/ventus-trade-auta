import React from "react"
import styled from "styled-components"

export const ContactIconsBox = ({ children, href, bg, hoverBg, content }) => {

  return (
        <IconBox href={href}>
            {children}
            <h5>{content}</h5>
        </IconBox>
  )
}

export const IconsBox = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px;


@media (min-width: ${({ theme }) => theme.device.m}) {
grid-template-columns: 1fr 1fr 1fr;
}

`

const IconBox = styled.a`
    background: ${({ theme }) => theme.colors.contactIconsLinkBg}; 
    padding: 20px 10px;
      text-decoration: none;
      text-align: center;
      font-size: 50px;
      display: grid;
      grid-gap: 10px;
      color: ${({ theme }) => theme.colors.contactIconsLink};
      transition: ease 500ms;

      &:hover{
        filter: brightness(150%);
      }

      svg{
        color: ${({ theme }) => theme.colors.contactIconsIcon};
        margin: auto;

        @media (min-width: ${({ theme }) => theme.device.l}) {
          margin: 0;
        }
      }

      h5 {
        text-decoration: none; 
        position: relative;
        display: inline-block;
        margin: 0; 
        word-break: break-word;
        margin: 0 10px;
      }   
 
     h5:after {
         position: absolute;
         content: '';
         height: 2px;
         bottom: -4px; 

         margin: 0 auto;
       left: 0;
         right: 0;
       width: 50%;
       background: ${({ theme }) => theme.colors.contactIconsBoxAfter};

       -o-transition:.5s;
         -ms-transition:.5s;
         -moz-transition:.5s;
         -webkit-transition:.5s;
         transition:.5s;
     }
    
     h5:hover:after {
       width: 100%;
       background: ${({ theme }) => theme.colors.contactIconsBoxAfterHover};
     }

      @media (min-width: ${({ theme }) => theme.device.l}) {
        font-size: 30px;
        text-align: start;
        display: flex;
        align-items: center;
        h5{
          font-size: 16px;
        }
      }
`



