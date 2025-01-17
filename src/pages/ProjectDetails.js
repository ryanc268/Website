import React, { useState, useEffect } from "react";
//Dynamic Meta Tag Content
import Helmet from "react-helmet";
//Styles
import styled from "styled-components";
//Loaded Data
import { MovieState } from "../movieState";
//Router
import { useLocation } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//image carosel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProjectDetails = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //On Load
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Helmet>
            <title>Project - {movie.title}</title>
            <meta
              name="description"
              content={`Find information on my project ${movie.title} here!`}
            />
            <meta property="og:title" content={`Project - ${movie.title}`} />
            <meta
              property="og:description"
              content={`Find information on my project ${movie.title} here!`}
            />
            <meta
              property="og:url"
              content={`https://www.ryancoppa.com/${movie.url}`}
            />
            <meta name="twitter:title" content={`Project - ${movie.title}`} />
            <meta
              name="twitter:description"
              content={`Find information on my project ${movie.title} here!`}
            />
          </Helmet>
          <Headline>
            <h2>{movie.title}</h2>
            <div className="carousels">
              {movie.carousels.map((carousel) => (
                <div className="carousel" key={carousel.carouselName}>
                  <h3>{carousel.carouselName}</h3>
                  <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    swipeable={true}
                    emulateTouch={true}
                    showThumbs={false}
                    showIndicators={false}
                  >
                    {carousel.carouselImgs.map((image) => (
                      <div key={image.name}>
                        <img src={image.image} alt="movie" />
                        <p className="legend">{image.name}</p>
                      </div>
                    ))}
                  </Carousel>
                </div>
              ))}
            </div>
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie2" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
  }
  .carousels {
    display: inline-flex;
    .carousel {
      margin-top: auto;
      margin-bottom: auto;
      h3 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .carousel-root {
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        @media (max-width: 500px) {
          width: 80%;
        }
      }
    }
  }
`;

const Awards = styled.div`
  //min-height: 80vh;
  display: flex;
  //margin: 5rem 10rem, 5rem, 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 3rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #01c4fa;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  //min-height: 50vh;
  margin-bottom: 5%;
  img {
    width: 30%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    img {
      width: 60%;
      height: auto;
    }
  }
`;

//Components
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default ProjectDetails;
