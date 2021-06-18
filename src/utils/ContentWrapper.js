import styled from "styled-components"

export const ContentWrapper = styled.section`
width: 90%;
margin: 2rem auto;

.text {
  line-height: 2rem;
  color: black;
  word-spacing: 0.2rem;
}

h3 {
  font-size: ${({ theme }) => theme.colors.sectionContentWrapperH3FSsmall};
  color: ${({ pColor, theme }) => pColor ? pColor : theme.colors.sectionContentWrapperH3};
  text-align: center;
  line-height: 2em;
}

@media (min-width: ${({ theme }) => theme.device.m}) {

  h3 {
    font-size: ${({ theme }) => theme.colors.sectionContentWrapperH3FS};
  }
}
`

export const CustomedSectionContentWrapper = styled(ContentWrapper)`

h3 {
  text-decoration: none; 
  position: relative;
  font-size: ${({ theme }) => theme.colors.customedSectionH3FS};
  color: ${({ theme }) => theme.colors.customedSectionH3};
  display: inline-block;
}   

h3:after {
   position: absolute;
   content: '';
   height: 4px;
   bottom: -8px; 
   margin: 0;
   left: 0;
   right: 0;
 width: 50%;
 background: ${({ theme }) => theme.colors.customedSectionUnderline};

 -o-transition:.5s;
   -ms-transition:.5s;
   -moz-transition:.5s;
   -webkit-transition:.5s;
   transition:.5s;
}

h3:hover:after {
 width: 100%;
 background: ${({ theme }) => theme.colors.customedSectionUnderlineHover};

`
