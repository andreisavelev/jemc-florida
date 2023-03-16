import styled from 'styled-components';
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { ContentHeader } from "@jemc-florida/shared";

const StyledAnnouncementContainer = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas:
    ". .";
`
const StyledSermonAnnouncement = styled.article`
  background-color: var(--jemc-light-orange);
  padding: 60px 90px;
`
const StyledSermonIllustration = styled.div`
  background-image: url("/images/man_prays.webp");
  background-size: cover;
  background-position: center;
`

export function MainAnnouncement() {
  return (
    <Container className="jemc-mb-section">
      <Row>
        <Col>
          <p className="text-center text-uppercase">
            Upcoming sermons
          </p>
          <ContentHeader
            level="h2"
            text="Join us and become part of something great"
            className="text-center mb-4"
          />

          <StyledAnnouncementContainer>
            <StyledSermonAnnouncement>
              <ContentHeader level="h5" text="WATCH AND LISTEN TO OUR SERMONS" />
              <figure>
                <blockquote className="blockquote">
                  <p className="mb-4">So then faith comes by hearing, and hearing by the word of God.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <cite title="Romans 10:17">Romans 10:17</cite>
                </figcaption>
              </figure>
              Тайм
            </StyledSermonAnnouncement>

            <StyledSermonIllustration aria-label="A man prays to God" />
          </StyledAnnouncementContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default MainAnnouncement;
