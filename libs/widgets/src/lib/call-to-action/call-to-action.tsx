import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { ContentHeader } from "@jemc-florida/shared";
import Row from "react-bootstrap/Row";

const StyledCallToAction = styled.section`
  position: relative;
  margin-bottom: 128px;
  background-image: url("/images/Praise_Heading_Image.jpg");
  background-size: cover;
  background-position: center;
  min-height: 430px;
`;
const StyledContainerWrapper = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export function CallToAction() {
  return (
    <StyledCallToAction>
      <StyledContainerWrapper className="position-absolute text-white d-flex flex-column align-items-start justify-content-center">
        <Container>
          <Col md={6} className="text-uppercase">
            <ContentHeader
              level={"h2"}
              text="What we believe?"
              className="display-5 font-weight-bold"
            />
            <p>
              <b>Our love for God</b> is expressed by doing everything <b>we can to make sure that</b>
              every person <b>is saved</b>, <b>healed</b>, <b>restored</b>,
              <b>and blessed</b> for the work of the gospel.
            </p>
          </Col>
        </Container>
      </StyledContainerWrapper>
    </StyledCallToAction>
  );
}

export default CallToAction;
