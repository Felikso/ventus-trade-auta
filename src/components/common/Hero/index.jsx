import React, { useContext } from 'react';

import { HeroSection, HeroTextBox } from './styles'


export const Hero = ({ children, bgImage }) => {

    return (
        <>
            <HeroSection
                Tag="div"
                {...bgImage}
            >
                <HeroTextBox>


                    <h2>hero!</h2>
                </HeroTextBox>
                {children}
            </HeroSection>
        </>

    );
};
