import React from "react"
import { graphql, Link } from "gatsby"
import { Layout, Seo, PropCard, CustomedHeader, Button, SectionTitle } from "components/common";
import { getImage } from 'gatsby-plugin-image'

import { ProductPhotosBox } from "components/product"

import { ProductDetailsWrapper, VinBox, ParametersBox, GridContentBox, GridBox, GridBoxDetails, GridInfoBox } from './styles.js'


import { alternativeLinks } from "constans/nav-items"


import { ReactComponent as PriceIcon } from 'assets/ProductProps/price.svg'
import { ReactComponent as VatIcon } from 'assets/ProductProps/vat.svg'
import { ReactComponent as PetrolIcon } from 'assets/ProductProps/petrol.svg'
import { ReactComponent as RoadIcon } from 'assets/ProductProps/road.svg'
import { ReactComponent as AutomatIcon } from 'assets/ProductProps/gearboxAutomatic.svg'
import { ReactComponent as ManualIcon } from 'assets/ProductProps/gearboxManual.svg'
import { ReactComponent as HorseIcon } from 'assets/ProductProps/powerhorse.svg'
import { ReactComponent as EngineIcon } from 'assets/ProductProps/engine.svg'


export const query = graphql`
  query($slug: String!) {
    itemsDataJson(slug: { eq: $slug }) {
      name
      description
      extras
      vin
      type
      price
      grossPrice
      power
      petrol
      imported
      invoice
      brand
      model
      generation
      year
      course
      capacity
      gearbox
      drive
      loanable
      rgb

      mainImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      gallery{
        image {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 50
              height: 50
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          
          }
        }
      }
    }

	  img:  file(relativePath: { eq: "PageHeaders/homeBg.jpg" }) {
		  childImageSharp {
			gatsbyImageData(
				width: 1200, 
				quality: 60, 
				webpOptions: {quality: 75})
			}
		  }

  }
`

const ProductPage = ({ data, key }) => {

  const backgroundImage = getImage(data.img);

  const productData = data.itemsDataJson

  const mainImage = productData.mainImage

  const images = productData.gallery.map((item) => {
    return ({
      ...item.image.childImageSharp,
      caption: `Kopalnia Gnejsu`,
      underCaptionName: item.name,
      underCaptionSize: item.size,
      fontColorName: 'green',

    })
  })

  return (
    <Layout alternativeLinks={alternativeLinks}>
      <Seo />
      <CustomedHeader
        bgImage={backgroundImage}
        headerBg="rgba(0,0,0,0.5)"
        afterOpacity="0.3 !important"
        HeroHeight="40vh"
        HeroWidthMedia="40vh"
        HeroHeightMedia="40vh"
        backgroundImage={backgroundImage}
        HeroBrandName="Ventus Trade"
        HeroSubName="pojazdy & urządzenia"
      >
      </CustomedHeader>
      <Link to="/"><Button back>powrót</Button></Link>

      <ProductDetailsWrapper>


        <GridBox>
          <div>
            <h1>{productData.name}</h1>
            <ProductPhotosBox images={images} mainImage={mainImage} />
          </div>
          <GridBoxDetails>

            <ParametersBox >
              <SectionTitle fifth ><h4>Parametry</h4></SectionTitle>
              <PropCard content={productData.price + " pln"}>
                <PriceIcon />
              </PropCard>

              <PropCard content={productData.invoice ? "tak" : "nie"}>
                <VatIcon />
              </PropCard>

              <PropCard content={productData.petrol}>
                <PetrolIcon />
              </PropCard>

              <PropCard content={productData.rgb ? productData.course + " rbg" : productData.course + " km"}>
                <RoadIcon />
              </PropCard>

              <PropCard content={productData.power + " km"}>
                <HorseIcon />
              </PropCard>

              <PropCard content={productData.capacity + " cm3"}>
                <EngineIcon />
              </PropCard>

              <PropCard content={productData.gearbox === 'manual' ? 'manual' : 'automat'}>
                {productData.gearbox === 'manual' ? <ManualIcon /> : <AutomatIcon />}
              </PropCard>

            </ParametersBox>

            <ParametersBox >
              <SectionTitle fifth><h4>Opis</h4></SectionTitle>
              <p>{productData.description}</p>
            </ParametersBox>
            {
              productData.vin !== "" && (
                <>
                  <VinBox>
                    <SectionTitle six><h4>VIN</h4></SectionTitle>
                    <span>{productData.vin}</span>
                  </VinBox>
                </>
              )
            }
          </GridBoxDetails>

        </GridBox>

        <GridInfoBox>
          <GridContentBox >
            <SectionTitle fifth><h4>Informacje</h4></SectionTitle>
            <p><span>Marka:</span>{productData.brand}</p>
            <p><span>Model:</span>{productData.model}</p>
            <p><span>Rok:</span>{productData.year}</p>
            {productData.grossPrice && (<p><span>Cena brutto:</span>{productData.grossPrice}</p>)}
            {productData.price && (<p><span>Cena netto:</span>{productData.price}</p>)}
            {productData.generation && (<p><span>Generacja:</span>{productData.generation}</p>)}
            {productData.drive && (<p><span>Napęd:</span>{productData.drive}</p>)}


            {productData.imported && (<p><span>Importowany</span></p>)}
            {productData.loanable && (<p><span>Możliwość wynajmu</span></p>)}
          </GridContentBox>




          <GridContentBox >
            <SectionTitle fifth><h4>Wyposażenie</h4></SectionTitle>
            {productData.extras.map((item, i) => (
              <li i={i}>✓ {item}</li>
            ))}

          </GridContentBox>
        </GridInfoBox>

      </ProductDetailsWrapper>
    </Layout>
  )
}

export default ProductPage

/* const OfferItemsBox = styled.section`
  background: ${({ theme }) => theme.colors.offerItemsBoxBg};
  padding: 10px 20px;

  h3{
    color: ${({ theme }) => theme.colors.offerItemsBoxH3};
    font-size: ${({ theme }) => theme.colors.offerItemsBoxH3FS};
  }

  h6{
    color: ${({ theme }) => theme.colors.offerItemsBoxH6};
    font-size: ${({ theme }) => theme.colors.offerItemsBoxH6FS};
  }

  h2{
    font-size: ${({ theme }) => theme.colors.offerItemsBoxH6FS};
  }
`
 */
