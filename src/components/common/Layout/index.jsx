import React, { useContext } from 'react';
import { ThemeProvider as ThemeProviderStyle } from "styled-components";
import { themeStyleLight as theme } from "styles";
import { themeStyleDark as themeDark } from "styles";
import { ThemeContext } from 'providers/ThemeProvider';
import { Footer } from 'components/theme';
import { Global } from './styles';
import { CustomedNav } from 'components/theme/CustomedNav';
import { links } from "constans/nav-items"
import ScrollBtn from "interactions/ScrollBtn"
/* import BottomNav from "components/common/BottomNav" */
import './fonts.css';

export const Layout = ({ children, alternativeLinks }) => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <>
      <ThemeProviderStyle theme={themeMode == 'light' ? theme : themeDark} >
        <Global theme={themeMode == 'light' ? theme : themeDark} />
        <CustomedNav links={alternativeLinks ? alternativeLinks : links} />
        <ScrollBtn showBelow={250} />
        {children}
        {/*         <BottomNav /> */}
        <Footer />
      </ThemeProviderStyle>
    </>

  );
};
