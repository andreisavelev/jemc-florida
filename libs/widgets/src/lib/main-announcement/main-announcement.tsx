import styled from 'styled-components';
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { ContentHeader } from "@jemc-florida/shared";
import Link from "next/link";

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

const StyledCoordinates = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 20px 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 0 16px;
  grid-template-areas:
    ". .";
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
              <StyledCoordinates>
                <Image
                  src="/images/Clock_icon.svg"
                  alt="Clock Icon"
                  width="20"
                  height="20"
                />
                <time dateTime="11:00">Sunday, 11:00</time>

                <Image
                  src="/images/Location_Icon.svg"
                  alt="Clock Icon"
                  width="20"
                  height="20"
                />
                <Link href="">Florida, Sarasota, North Port</Link>
              </StyledCoordinates>
            </StyledSermonAnnouncement>

            <StyledSermonIllustration aria-label="A man prays to God" />
          </StyledAnnouncementContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default MainAnnouncement;
