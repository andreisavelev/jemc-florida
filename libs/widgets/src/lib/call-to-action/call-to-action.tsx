import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { ContentHeader } from "@jemc-florida/shared";
import { Thesis } from './thesis/thesis';

const StyledCallToAction = styled.section`
  position: relative;
  margin-bottom: var(--jemc-mb-section);
  background-image: url("/images/Praise_Heading_Image.jpg");
  background-size: cover;
  background-position: center;
  min-height: 430px;
`;



export function CallToAction() {
  return (
    <StyledCallToAction>
      <div className="pt-5 pb-5 text-white d-flex flex-column align-items-start justify-content-center">
        <Container>
          <Row className="mb-3">
            <Col className="text-uppercase text-center">
              <ContentHeader level="h2" text="Тезисы о нас" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Stack gap={3}>
                <Thesis icon="PIN">
                  Мы не делаем политических заявлений, но говорим о любви и единстве христиан.
                </Thesis>
                <Thesis icon="PIN">
                  Отношения людей церкви важнее воскресных собраний.
                </Thesis>
                <Thesis icon="PIN">
                  Мы не собираемся быть самой большой церковью, мы просто хотим быть
                  постоянно-растущей церковью.
                </Thesis>
                <Thesis icon="PIN">
                  Мы - современная церковь с древним посланием.
                </Thesis>
                <Thesis icon="PIN">
                  Мы - церковь видения. А это значит - ставим ясные цели.
                </Thesis>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledCallToAction>
  );
}

export default CallToAction;
