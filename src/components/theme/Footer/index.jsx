import React from 'react';
import { Hr } from 'components/common';
import { MediaBox, FooterWrapper, FooterLogo, ToggleableBg, FooterSectionsBox, FooterBrandNameBox, FooterLocationBox, LocationData, LocationMap, FooterIconsBox, FooterIcon, FooterInfoBox, FooterInfo } from './styles';

import { footerIcons, footerInfo } from "constans/footer-items"
/* import { ReactComponent as Logo } from 'assets/illustrations/ventus-trade-logo-white.svg' */
import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";





export const Footer = () => (
  <FooterWrapper>
    <Hr />
    <FooterBrandNameBox>
      <FooterLogo /> <h3>ventus trade</h3>
    </FooterBrandNameBox>
    <Hr />
    <MediaBox>
      <FooterLocationBox>
        <LocationData>
          <h3>Mrokocin 15</h3>
          <h4>57-200</h4>
          <h4>Ziębice</h4>
          <h4>Polska</h4>
          <a href="tel:507901144"><h3>507 901 144</h3></a>
        </LocationData>

        <LocationMap>
          <FaMapMarkedAlt />
          <p>lokalizacja</p>
        </LocationMap>
      </FooterLocationBox>

      <Hr />
      <FooterSectionsBox>
        <ToggleableBg />
        <h5>sekcje</h5>
        <p><a>okna</a> - zamówienie + montaż produktów stolarki okiennej</p>
        <p><a>auta</a> - sprzedaż pojazdów i urządzeń używanych</p>
        <p><a>kodowanie</a> - usługi informatyczne - strony www + content marketing + zarządzanie danymi</p>
      </FooterSectionsBox>

    </MediaBox>
    <Hr />
    <FooterIconsBox>

      {footerIcons.map((item, index) => (
        <FooterIcon key={index} href={item.link} title={item.title}>
          {item.icon}
        </FooterIcon>
      ))}

    </FooterIconsBox>
    <Hr />
    <FooterInfoBox>

      {footerInfo.map((item, index) => (
        <FooterInfo
          to={item.link}
          key={index} >
          {item.title}
        </FooterInfo>
      ))}

    </FooterInfoBox>
  </FooterWrapper>
);
