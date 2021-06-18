import React from 'react';
import { PropCard, SectionTitle } from 'components/common';
import { Wrapper, ContactIconsBox, ToggleableBg, GridContactInfo, ContactSectionsBox, ContactSectionWrapper, ReverseWrapper } from './styles';
/* import ContactForm from './ContactForm'; */

import { contactItems } from "constans"



export const Contact = () => (
  <Wrapper id="contact">
    <SectionTitle secondary>
      <h4>Kontakt</h4>
    </SectionTitle>
    <ContactSectionWrapper>
      <ReverseWrapper>
        <ContactIconsBox>
          {
            contactItems.map((item, i) => (
              <a href={item.href} title={item.alt}><PropCard secondary content={item.content}>
                {item.icon}
              </PropCard>
              </a>
            ))
          }
        </ContactIconsBox>
        <ContactSectionsBox>
          <ToggleableBg />
          <GridContactInfo>
            <div>
              <p>Nazwa pełna:</p>
              <h5>Ventus Trade Patrycja Skóra</h5>
              <p>NIP:</p>
              <h5>8871716875</h5>
              <p>Regon:</p>
              <h5>020805395</h5>
            </div>
            <div>
              <p>Telefon:</p>
              <h5>571 901 144</h5>
              <p>Mail:</p>
              <h5>auta@ventus-trade.pl</h5>
            </div>
          </GridContactInfo>

        </ContactSectionsBox>
      </ReverseWrapper>

      {/*       <ContactFormBox>
        <ContactForm />
      </ContactFormBox> */}


    </ContactSectionWrapper>
  </Wrapper>
);
