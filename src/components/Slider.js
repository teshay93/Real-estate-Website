import React from "react";
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
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const HomeSlider = styled.div``;

const HomeImage = styled.img``;

const HomeContent = styled.div``;

const Arrow = styled(IoMdArrowForward)``;

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
  return (
    <div>
      <SliderSection>
        <SliderWrapper>
          {slides.map((slide, index) => {
            return (
              <HomeSlide key={index}>
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
              </HomeSlide>
            );
          })}
          <SliderButton>
            <PrevArrow />
            <NextArrow />
          </SliderButton>
        </SliderWrapper>
      </SliderSection>
    </div>
  );
};

export default Home;
