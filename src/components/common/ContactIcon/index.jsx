import React, { useContext } from 'react';
import { ContactIconContainer, ContactIconBox, ContactIconInfo } from './styles';


import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";

/* import { Button } from 'components/common' */
export const ContactIcon = ({ children, bgImage, product }) => {

    return (
        <>
            <ContactIconContainer>
                <ContactIconBox>
                    <FaPhoneSquareAlt />
                </ContactIconBox>
                <ContactIconInfo>
                    120 000 KM
                </ContactIconInfo>
            </ContactIconContainer>
        </>

    );
};
