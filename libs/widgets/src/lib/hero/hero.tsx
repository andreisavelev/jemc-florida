import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Link from "next/link";

const StyledHero = styled.div`
  position: absolute;
  background-image: url("/images/hero.jpg");
  background-size: cover;
  background-position: center;
  height: calc(100vh - 56px);
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
            Welcome to our CHURCH

            <h1 className="mb-4 mt-2 display-4 font-weight-bold">
              Become a part of our community
            </h1>

            <div className="mt-3">
              <Link
                href="#"
                className="btn btn-primary btn-warning"
              >
                Learn more
              </Link>
            </div>
          </Col>
        </Container>
      </StyledContainerWrapper>
    </StyledHero>
  );
}

export default Hero;
