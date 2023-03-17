import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';

const StyledHero = styled.div`
  background-image: url("/images/hero.jpg");
  background-size: cover;
  background-position: center;
  height: 30rem;
  margin-bottom: 128px;
`;

const StyledContainerWrapper = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export function Hero() {
  return (
    <StyledHero className="position-relative">
      <StyledContainerWrapper className="position-absolute text-white d-flex flex-column align-items-start justify-content-center">
        <Container>
          <Col md={6} className="text-uppercase">
            <figure>
              <h1 className="mb-4 mt-2 display-6 font-weight-bold">
                «Бог хочет, чтобы все люди спаслись и достигли познания истины»
              </h1>

              <figcaption className="blockquote-footer">
                <cite title="1-е Тимофею 2:4">1-е Тимофею 2:4</cite>
              </figcaption>
            </figure>
          </Col>
        </Container>
      </StyledContainerWrapper>
    </StyledHero>
  );
}

export default Hero;
