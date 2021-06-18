import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import { Wrapper, ProductsWrapper } from './styles';
import { SectionTitle } from 'components/common'

import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from "gbimage-bridge"
import { ProductCard } from 'components/product'
import { Hr } from 'components/common'


export const Offer = () => {

    const { img, productData } = useStaticQuery(
        graphql`
    query {
    
        productData:  allItemsDataJson {
        nodes {
          slug
          name
          price
          invoice
          petrol
          course
          rgb

          mainImage {
            childImageSharp {
                gatsbyImageData(
                    quality: 60, 
                    webpOptions: {quality: 75})
                }
          
          }
        }
      }
    }
    `
    );

    return (
        <Wrapper id="offer" >


            <SectionTitle>
                <h4>Oferta</h4>
            </SectionTitle>

            <ProductsWrapper>
                {productData.nodes.map((product, i) => {
                    const mainImage = getImage(product.mainImage.childImageSharp.gatsbyImageData);
                    const bgImage = convertToBgImage(mainImage)
                    return (
                        <>
                            <ProductCard key={i} product={product} bgImage={bgImage} i={i} />
                        </>


                    )
                })}

            </ProductsWrapper>
        </Wrapper>


    );
};
