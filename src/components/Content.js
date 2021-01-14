import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.div`
width: 100%;
height: 100%;
padding: 4rem 0rem;
`;

const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '2' : '1')};

h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}

p {
    margin-bottom: 2rem;
}
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  } 

  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
`;

//destructor below
const Content = ({ heading, paragraphOne, paragraphTwo, reverse, image }) => {
  return (
    <div>
      <Section>
        <Container>
          <ColumnLeft>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            <Button to="/homes" primary='true'>label</Button>
            </ColumnLeft>
            <ColumnRight reverse={reverse}>
              <img src={image} alt="home" />
            </ColumnRight>
        </Container>
      </Section>
    </div>
  );
};

export default Content;
