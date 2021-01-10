import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { IoMdArrowForward } from "react-icons/io";
import { Button } from "./Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SliderSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HomeSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HomeSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

const HomeImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const HomeContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: calc(100%-100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 3rem);
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Arrow = styled(IoMdArrowForward)`
  margin-left: 0.5rem;
`;

const SliderButton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoIosArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoIosArrowForward)`
  ${arrowButtons}
`;

//De-structuring data below//
const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  //Slider Function//
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
    // console.log(current);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
    // console.log(current)
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <SliderSection>
        <SliderWrapper>
          {slides.map((slide, index) => {
            return (
              <HomeSlide key={index}>
                {index === current && (
                  <HomeSlider>
                    <HomeImage src={slide.image} alt={slide.alt} />
                    <HomeContent>
                      <h1>{slide.title}</h1>
                      <p>{slide.price}</p>
                      <Button
                        to={slide.path}
                        primary="true"
                        css={`
                          max-width: 160px;
                        `}
                      >
                        {slide.label}
                        <Arrow />
                      </Button>
                    </HomeContent>
                  </HomeSlider>
                )}
              </HomeSlide>
            );
          })}
          <SliderButton>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButton>
        </SliderWrapper>
      </SliderSection>
    </div>
  );
};

export default Home;
