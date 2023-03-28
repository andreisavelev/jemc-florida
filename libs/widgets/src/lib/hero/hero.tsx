import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const StyledHero = styled.div`
  background-image: url("/images/hero_pastor.jpeg");
  background-size: cover;
  background-position: center;
  height: 30rem;
  margin-bottom: var(--jemc-mb-section);
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
          <Row className="mb-3">
            <Col md={7} className="text-uppercase">
              <h1 className="display-6">Международный библейский центр «Посольство&nbsp;Иисуса» Флорида</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link href="#slogans" className="btn btn-primary">
                Узнайте больше о нас
              </Link>
            </Col>
          </Row>
        </Container>
      </StyledContainerWrapper>
    </StyledHero>
  );
}

export default Hero;
