import React, { useContext } from 'react';
import { Link } from "gatsby"
import { SectionTitle } from 'components/common'
import { ProductCardContainer, ProductCardIconsContainer, ProductCardPhoto, ProductCardIconsBox, ProductCardIcons, ProductIcon } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';

import { ReactComponent as PriceIcon } from 'assets/ProductProps/price.svg'
import { ReactComponent as VatIcon } from 'assets/ProductProps/vat.svg'
import { ReactComponent as PetrolIcon } from 'assets/ProductProps/petrol.svg'
import { ReactComponent as RoadIcon } from 'assets/ProductProps/road.svg'

import { Button, PropCard } from "components/common"

/* import { Button } from 'components/common' */
export const ProductCard = ({ children, bgImage, product, i }) => {
    const { themeMode } = useContext(ThemeContext);
    const even = i % 2 == 0

    return (
        <>
            <ProductCardContainer
                css={`
            @media (min-width: ${({ theme }) => theme.device.m}) {
                align-self: ${even ? "flex-end" : "flex-start"};
                margin: 20px 100px;
            }

            @media (min-width: ${({ theme }) => theme.device.l}) {
                align-self: ${even ? "flex-end" : "flex-start"};
                margin: 0 180px;
            }
            `}>

                <ProductCardIconsContainer
                    style={{
                        right: (even ? "0" : ""),
                        left: (even ? "" : "0")
                    }}>
                    <ProductCardIconsBox
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: (even ? "0" : ""),
                            left: (even ? "" : "0")
                        }}
                    >

                        <PropCard content={product.price + " pln"}>
                            <PriceIcon />
                        </PropCard>

                        <PropCard content={product.invoice ? "tak" : "nie"}>
                            <VatIcon />
                        </PropCard>

                        <PropCard content={product.petrol}>
                            <PetrolIcon />
                        </PropCard>

                        <PropCard content={product.rgb ? product.course + " rgb" : product.course + " km"}>
                            <RoadIcon />
                        </PropCard>
                    </ProductCardIconsBox>
                </ProductCardIconsContainer>

                <ProductCardPhoto
                    Tag="div"
                    {...bgImage}
                    style={{
                        position: "absolute",
                        right: (even ? "" : "0"),
                        left: (even ? "0" : "")
                    }}
                >
                    <SectionTitle
                        style={{
                            textAlign: (even ? "right" : "left"),

                        }}
                        productName>
                        <h4>{product.name}</h4>
                    </SectionTitle>



                    <Link
                        to={`/oferta/${product.slug}/`}>
                        <Button
                            themeMode={themeMode}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                right: (even ? "" : "0"),
                                left: (even ? "0" : "")
                            }}
                        >sprawdź</Button>
                    </Link>

                </ProductCardPhoto>


            </ProductCardContainer>
        </>

    );
};
