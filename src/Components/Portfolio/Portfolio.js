import React from 'react';
import  { PortfolioSection , PortfolioTitle , PortfolioList , PortfolioItem , Span , Overlay , OverlaySpan , ImageWrapper , Image } from './style.js'
const Portfolio = () => {
    return (
        <PortfolioSection>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        
        <div class="box">
            
            <ImageWrapper>
                <Image src="images/portfolio-img1.jpg" alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            
            <ImageWrapper>
                <Image src="images/portfolio-img2.jpg" alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            
            <ImageWrapper>
                <Image src="images/portfolio-img3.jpg" alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            
            <ImageWrapper>
                <Image src="images/portfolio-img4.jpg" alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            
            <ImageWrapper>
                <Image src="images/portfolio-img5.jpg" alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            
            <ImageWrapper>
                <Image src="images/portfolio-img6.jpg" alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            
            <ImageWrapper>
                <Image src="images/portfolio-img7.jpg" alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            
            <ImageWrapper>
                <Image src="images/portfolio-img8.jpg" alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            
        </div>
        
    </PortfolioSection>
    )
}

export default Portfolio;
